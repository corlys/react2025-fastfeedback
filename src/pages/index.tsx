import { Text, Stack, Button, Heading } from "@chakra-ui/react";

import { Container } from "@/components/Container";
import { Main } from "@/components/Main";
import { DarkModeSwitch } from "@/components/DarkModeSwitch";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import { useAuth } from "@/lib/auth";

const Index = () => {
  const auth = useAuth();
  return (
    <Container height="100vh">
      <Main>
        <Heading textAlign="center">FastFeedback</Heading>

        <Stack spacing={4}>
          {auth?.user?.email == null && (
            <Button
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
              onClick={() => {
                auth && auth.signout();
              }}
            >
              Sign Out
            </Button>
          )}
        </Stack>
      </Main>

      <DarkModeSwitch />
      <Footer>
        <Text>Next ❤️ Chakra</Text>
      </Footer>
      <CTA />
    </Container>
  );
};

export default Index;
