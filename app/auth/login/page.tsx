"use client";

import Loading from "@kubie/loading";
import { signIn, useSession } from "next-auth/react";
import Image from "next/image";
import { redirect } from "next/navigation";
import GithubIcon from "../../../public/github.svg";

export default function Page() {
  const session = useSession();

  if (session.status === "loading") {
    return <Loading />;
  }
  if (session.data?.user) {
    redirect("/");
  }
  return (
    <div className="my-md auto container my-40 flex flex-col items-center justify-center text-center">
      <div className="mb-6 flex flex-col gap-2">
        <h1 className="text-6xl font-black text-slate-700">Bem vindo</h1>
        <p className="text-sm font-normal text-slate-400">
          Faça seu login utilizando algum dos nossos provedores
        </p>
      </div>
      <button
        onClick={() =>
          signIn("github", {
            redirect: true,
            callbackUrl: "/profile",
          })
        }
        className="row-auto flex items-center gap-2 rounded-md bg-slate-500 px-6 py-3"
      >
        <Image
          height={20}
          width={20}
          className="h-5 w-5"
          src={GithubIcon}
          alt="Login Github"
        />
        <span className="text-xs text-slate-50">Login with Github</span>
      </button>
    </div>
  );
}
