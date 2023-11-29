/**
 * Componente de inicio de sesión.
 *
 * Este componente muestra un formulario de inicio de sesión con campos para el nombre de usuario y la contraseña.
 * También incluye opciones para recordar la sesión, restablecer la contraseña y registrarse.
 *
 * Estas credenciales de inicio de sesión se pueden utilizar, son proporcionadas directamente por la API:
 * USERNAME : kminchelle
 * PASSWORD : 0lelplR
 *
 *
 * @returns {JSX.Element} El elemento JSX del componente de inicio de sesión.
 */
"use client";

import useStore from "@/store/auth";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm();
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const { login, isAuthenticated, messageError } = useStore((state) => state);

  const handleLogin = (data) => {
    setLoading(true);

    login({
      username: data.username,
      password: data.password,
    });

    setLoading(false);
  };

  useEffect(() => {
    if (isAuthenticated) {
      router.push("/");
    }
  }, [isAuthenticated, router]);

  return (
    <div className="border p-5 w-full md:w-[500px] shadow-md rounded-md flex flex-col gap-5 ">
      <form onSubmit={handleSubmit(handleLogin)}>
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
                value: 4,
                message: "Password should not be less than 4 characters",
              },
            })}
          />

          {errors.password?.message && (
            <span className="text-red-500 ">{errors.password?.message}</span>
          )}
        </div>

        <div className="flex justify-between my-5">
          <div className="flex flex-row-reverse gap-3">
            <label htmlFor="remember">Remember me</label>
            <input
              className="border-2 border-black text-left p-2 rounded-md transform scale-150"
              type="checkbox"
              name="remember"
              id="remember"
            />
          </div>
          <div>
            <span>Forgot password?</span>
          </div>
        </div>

        <button
          type="submit"
          className={` p-2 rounded-md w-full font-semibold ${
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
          Don&apos;t have an account?{" "}
          <Link href="/auth/register">
            <strong>Sign up</strong>
          </Link>
        </p>
      </div>
    </div>
  );
}
