"use client";

import { SessionProvider } from "next-auth/react";

type AuthProviderTypes = {
  children: React.ReactNode;
};

export default function AuthProvider({ children }: AuthProviderTypes) {
  return <SessionProvider>{children}</SessionProvider>;
}
