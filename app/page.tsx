import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "./page.module.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className=" flex justify-center items-center m-auto absolute left-0 right-0 bottom-0 top-0">
      <div className="text-center mb-7">
        <Image
          className="mx-auto h-12 w-auto mb-5"
          src="https://dashboard.kiwify.com.br/_nuxt/img/kiwify-green-logo.2af0e50.png"
          alt="Workflow"
          width={100}
          height={100}
        />

        <h2 className="text-3xl font-extrabold text-gray-900 mb-2">
          Criar nova conta
        </h2>
        <p>
          Ou{" "}
          <Link
            href={`/signin`}
            className="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150"
          >
            entrar na sua conta existente
          </Link>
        </p>
      </div>
    </main>
  );
}
