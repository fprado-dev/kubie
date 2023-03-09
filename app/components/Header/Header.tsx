import Logged from "@kubie/auth/Logged";
import { getServerSession } from "next-auth/next";
import Link from "next/link";
import { authOptions } from "pages/api/auth/[...nextauth]";
import Button from "../Button/Button";

export default async function Header() {
  const session = await getServerSession(authOptions);
  return (
    <div className="h-24 bg-zinc-100 py-8">
      <nav className="container mx-auto flex items-center justify-between">
        <Link href={"/"}>
          <h1 className="text-2xl font-bold text-slate-700">Kubie.</h1>
        </Link>
        <ul className="flex items-center gap-6">
          {!session?.user && <Button to="auth/login" text="Acessar" />}
          {session?.user && (
            <Logged
              name={session.user.name!}
              image={session.user.image || ""}
            />
          )}
        </ul>
      </nav>
    </div>
  );
}
