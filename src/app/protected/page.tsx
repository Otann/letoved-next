"use client";
import LogoutButton from "@/components/buttons/LogoutButton";
import { Grid, Column } from "@carbon/react";
import { useSession, signIn, signOut } from "next-auth/react";

export default function RepoPage() {
  const { data: session } = useSession();

  return (
    <Grid className="repo-page">
      <Column lg={16} md={8} sm={4} className="repo-page__r1">
        <h1>This is a protected resource</h1>
        <LogoutButton />
      </Column>
    </Grid>
  );
}
