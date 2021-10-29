import { Text, Stack, Button, Heading, Center } from "@chakra-ui/react";
import { useRouter } from "next/router";
import Head from "next/head";

import { Main } from "@/components/Main";
import { useAuth } from "@/lib/auth";
import { Logo } from "@/components/CustomIcons/Logo";
import { FiGithub } from "react-icons/fi";
import GoogleIcon from "@/components/CustomIcons/Google";

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
          <>
            <Button
              size="lg"
              leftIcon={<FiGithub />}
              width="min"
              bgColor="gray.900"
              color="white"
              fontWeight="medium"
              _hover={{ bg: "gray.700" }}
              _active={{ bg: "gray.800", transform: "scale(0.95)" }}
              onClick={() => {
                auth && auth.signInWithGitHub();
              }}
            >
              Sign In with Github
            </Button>
            <Button
              size="lg"
              leftIcon={<GoogleIcon />}
              width="min"
              bgColor="gray.100"
              color="black"
              fontWeight="medium"
              _hover={{ bg: "gray.200" }}
              _active={{ bg: "gray.800", transform: "scale(0.95)" }}
              onClick={() => {
                auth && auth.signInWithGoogle();
              }}
            >
              Sign In with Google
            </Button>
          </>
        )}
        {auth?.user?.email && <Text>{auth?.user?.email}</Text>}
        {auth?.user?.email && (
          <Button
            size="lg"
            leftIcon={<Logo />}
            width="min"
            bgColor="gray.100"
            color="black"
            fontWeight="medium"
            _hover={{ bg: "gray.200" }}
            _active={{ bg: "gray.800", transform: "scale(0.95)" }}
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
