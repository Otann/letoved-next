"use client";
import { authOptions } from "@/lib/nextAuthOptions";
import { Grid, Column, Form, FormGroup, TextInput, Button, Stack } from "@carbon/react";
import { useSession, signIn, signOut } from "next-auth/react";
import { useState } from "react";

  

export default function RepoPage() {
  const { data: session } = useSession();  

  const [code, setCode] = useState<string>();

  return (
    <Grid className="repo-page">
      <Column lg={16} md={8} sm={4} className="repo-page__r1">
        <Form aria-label="code form" onSubmit={(event) => { 
          event.preventDefault();
          signIn("credentials", { code })
        } }>
          <Stack gap={7}>
            <TextInput id="code" labelText="Код из телеграма" onChange={(event) => {
              setCode(event.target.value)              
            }} />
            <Button type="submit" className="some-class">
              Войти
            </Button>
          </Stack>
        </Form>
      </Column>
    </Grid>
  );
}
