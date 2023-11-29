"use client";
import useStore from "@/store/auth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const PrivateRoute = ({ children }) => {
  const router = useRouter();
  const { isAuthenticated } = useStore((state) => state);

  useEffect(() => {
    useStore.persist.rehydrate();
  });

  useEffect(() => {
    console.log("Entro seguyndo UseEffect");
    if (!isAuthenticated) {
      router.push("/auth/login");
    }
  }, [isAuthenticated, router]);

  return <>{children}</>;
};

export default PrivateRoute;
