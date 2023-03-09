"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

type ButtonProps = {
  to?: string;
  text?: string;
};
function Button({ to = "/", text = "Voltar" }: ButtonProps) {
  const pathName = usePathname();
  const isLoginPage = pathName === "/auth/login";
  if (!isLoginPage) {
    return (
      <Link
        href={to}
        className="rounded bg-slate-700 py-2 px-6 text-xs font-normal text-white"
      >
        {text}
      </Link>
    );
  } else {
    return <div />;
  }
}

export default Button;
