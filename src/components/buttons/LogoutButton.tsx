"use client";
import { Button } from "@carbon/react";
import { signOut } from "next-auth/react";
import type { ClientSafeProvider } from "next-auth/react";

export default function LogoutButton({ auth }: { auth?: ClientSafeProvider }) {
  return (
    <Button onClick={() => signOut()}>
      Выйти
    </Button>
  );
}
