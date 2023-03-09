"use client";

import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default function Profile() {
  const session = useSession();

  if (!session.data?.user) {
    redirect("/");
  }
  return (
    <div className="min-h-screen bg-slate-50 py-4">
      <div className="container mx-auto">
        <h1
          className="
        text-md font-thin tracking-wide text-gray-900 sm:text-4xl
        "
        >
          Hello, {session.data.user.name}
        </h1>
      </div>
    </div>
  );
}
