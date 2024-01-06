"use client";
import { Content, Theme } from "@carbon/react";
import AppHeader from "@/components/AppHeader/AppHeader";

import { SessionProvider } from "next-auth/react";

export function Providers({ children }) {
  return (
    <SessionProvider>
      <Theme theme="g100">
        <AppHeader />
      </Theme>
      <Content>{children}</Content>
    </SessionProvider>
  );
}
