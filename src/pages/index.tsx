import { Text, Stack, Button, Heading, Center } from "@chakra-ui/react";
import { useRouter } from "next/router";
import Head from "next/head";

import { Main } from "@/components/Main";
import { useAuth } from "@/lib/auth";
import { Logo } from "@/components/CustomIcons/Logo";
const Index = () => {
  const router = useRouter();
  const auth = useAuth();
  return (
    <Main>
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if (document.cookie && document.cookie.includes('fast-feedback-auth')) {
                window.location.href = "/dashboard"
              }
            `,
          }}
        />
      </Head>
      <Heading textAlign="center">FastFeedback</Heading>
      <Center>
        <Logo boxSize={32} />
      </Center>
      <Stack spacing={4} align="center">
        {auth?.user?.email == null && (
          <Button
            width="min"
            onClick={() => {
              auth && auth.signInWithGitHub();
            }}
          >
            Sign In
          </Button>
        )}
        {auth?.user?.email && <Text>{auth?.user?.email}</Text>}
        {auth?.user?.email && (
          <Button
            width="min"
            onClick={() => {
              router.push("/dashboard");
            }}
          >
            Go to dashboard
          </Button>
        )}
      </Stack>
    </Main>
  );
};

export default Index;
