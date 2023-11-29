/**
 * Componente de registro que permite a los usuarios crear una cuenta.
 *Hay que tener en cuenta que dado que se esta haciendo uso de una API externa, no se puede registrar un usuario, esto es solo para probar el funcionamiento de la aplicación y componente.
 * @returns {JSX.Element} El elemento JSX del componente de registro.
 */
"use client";

import useStore from "@/store/auth";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    watch,
  } = useForm();
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [passwordMatch, setPasswordMatch] = useState(true);

  const {
    register: reguisterStore,
    messageError,
    registered,
  } = useStore((state) => state);

  const handleRegsiter = (data) => {
    setLoading(true);

    reguisterStore({
      firstName: data.firstName,
      lastName: data.lastName,
      username: data.username,
      password: data.password,
    });

    setLoading(false);
  };

  const password = watch("password", "");
  const repeatPassword = watch("repeatPassword", "");

  useEffect(() => {
    if (registered) {
      router.refresh();
      router.push("/auth/login");
    }
  }, [registered, router]);

  useEffect(() => {
    setPasswordMatch(password === repeatPassword);
  }, [password, repeatPassword]);

  return (
    <div className="border p-5 w-full md:w-[600px] shadow-md rounded-md flex flex-col gap-5 ">
      <form onSubmit={handleSubmit(handleRegsiter)}>
        <div className="flex justify-between items-center gap-1 ">
          <div className="flex flex-col text-left  flex-1">
            <label htmlFor="firstName" className="text-left font-bold p-1">
              First name
            </label>

            <input
              className=" form-input border-2 border-black text-left p-2 rounded-md"
              type="text"
              name="firstName"
              id="firstName"
              placeholder="Enter your first name"
              {...register("firstName", {
                required: {
                  value: true,
                  message: "This field is required",
                },
                minLength: {
                  value: 8,
                  message: "First name should not be less than 8 characters",
                },
              })}
            />
            {errors.firstName?.message && (
              <span className="text-red-500 ">{errors.firstName?.message}</span>
            )}
          </div>

          <div className="flex flex-col text-left flex-1">
            <label htmlFor="lastName" className="text-left font-bold p-1">
              Last name
            </label>

            <input
              className=" form-input border-2 border-black text-left p-2 rounded-md"
              type="text"
              name="lastName"
              id="lastName"
              placeholder="Enter your last name"
              {...register("lastName", {
                required: {
                  value: true,
                  message: "This field is required",
                },
              })}
            />
            {errors.lastName?.message && (
              <span className="text-red-500 ">{errors.lastName?.message}</span>
            )}
          </div>
        </div>

        <div className="flex flex-col text-left">
          <label htmlFor="username" className="text-left font-bold p-1">
            Username
          </label>

          <input
            className=" form-input border-2 border-black text-left p-2 rounded-md"
            type="text"
            name="username"
            id="username"
            placeholder="Enter your username"
            {...register("username", {
              required: {
                value: true,
                message: "This field is required",
              },
            })}
          />
          {errors.username?.message && (
            <span className="text-red-500 ">{errors.username?.message}</span>
          )}
        </div>

        <div className="flex flex-col text-left">
          <label htmlFor="password" className="text-left font-bold p-1">
            Password
          </label>
          <input
            className="border-2 border-black text-left p-2 rounded-md"
            type="password"
            name="password"
            id="password"
            placeholder="Your password"
            {...register("password", {
              required: {
                value: true,
                message: "This field is required",
              },
              maxLength: {
                value: 20,
                message: "Password should not be more than 20 characters",
              },
              minLength: {
                value: 8,
                message: "Password should not be less than 8 characters",
              },
              pattern: {
                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
                message:
                  "Password should contain at least one uppercase letter, one lowercase letter and one number",
              },
            })}
          />

          {errors.password?.message && (
            <span className="text-red-500 ">{errors.password?.message}</span>
          )}
        </div>

        <div className="flex flex-col text-left">
          <label htmlFor="repeatPassword" className="text-left font-bold p-1">
            Repeat Password
          </label>
          <input
            className={`border-2 border-black text-left p-2 rounded-md ${
              passwordMatch ? "" : "border-red-500"
            }`}
            type="password"
            name="repeatPassword"
            id="repeatPassword"
            placeholder="Repeat your password"
            {...register("repeatPassword", {
              required: {
                value: true,
                message: "This field is required",
              },
              validate: (value) =>
                value === password || "Passwords do not match",
            })}
          />

          {errors.repeatPassword?.message && (
            <span className="text-red-500 ">
              {errors.repeatPassword?.message}
            </span>
          )}
        </div>

        <button
          type="submit"
          className={` p-2 mt-5 rounded-md w-full font-semibold ${
            isValid ? "bg-black text-white" : "border-2 border-black"
          }`}
        >
          Log in {loading && <span className="animate-spin">🌀</span>}
        </button>
      </form>

      {messageError && (
        <div className="text-red-500 text-center">{messageError}</div>
      )}
      <div className="flex justify-center flex-col gap-3">
        <strong className="text-center text-sm mb-2">or</strong>

        <button className=" text-black border-2 border-black p-2 rounded-md w-full font-semibold">
          Continue with Google
        </button>
        <button className=" text-black border-2 border-black p-2 rounded-md w-full font-semibold">
          Continue with Facebook
        </button>

        <p>
          You have an account?{" "}
          <Link href="/auth/login">
            <strong>Login</strong>
          </Link>
        </p>
      </div>
    </div>
  );
}
