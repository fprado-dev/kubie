"use client";

import { signOut } from "next-auth/react";
import Link from "next/link";

type User = {
  image: string;
  name?: string;
};

export default function Logged({ image, name }: User) {
  return (
    <li className="flex items-center gap-4">
      <Link href={"/profile"}>
        <p className="text-sm text-slate-700">
          Bem vindo, <strong>{name}</strong>
        </p>
      </Link>
      <button
        className="rounded bg-slate-700 py-2 px-6 text-xs font-normal text-white"
        onClick={() => signOut()}
      >
        Sair
      </button>
    </li>
  );
}
