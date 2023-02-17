"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function AuthHeader() {
  const currentRoute = usePathname();

  useEffect(() => {
    if (currentRoute === "/signup") {
      document.title = "Criar conta";
    } else {
      document.title = "Entrar";
    }
  }, [currentRoute]);

  return (
    <div className="text-center mb-7">
      <img
        className="mx-auto h-12 w-auto mb-5"
        src="https://dashboard.kiwify.com.br/_nuxt/img/kiwify-green-logo.2af0e50.png"
        alt="Workflow"
      />

      {currentRoute === "/signup" ? (
        <h2 className="text-3xl font-extrabold text-gray-900 mb-2">
          Criar nova conta
        </h2>
      ) : (
        <h2 className="text-3xl font-extrabold text-gray-900 mb-2">
          Entrar na sua conta
        </h2>
      )}
      {currentRoute === "/signup" ? (
        <p>
          Ou{" "}
          <Link
            href={`/signin`}
            className="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150"
          >
            entrar na sua conta existente
          </Link>
        </p>
      ) : (
        <p>
          Ou{" "}
          <Link
            href={`/signup`}
            className="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150"
          >
            fazer cadastro
          </Link>
        </p>
      )}
    </div>
  );
}
