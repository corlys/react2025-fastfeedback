import { Text, Stack, Button, Heading, Center } from "@chakra-ui/react";

import { Main } from "@/components/Main";
import { useAuth } from "@/lib/auth";
import { Logo } from "@/components/CustomIcons/Logo";
const Index = () => {
  const auth = useAuth();
  return (
    <Main>
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
              auth && auth.signout();
            }}
          >
            Sign Out
          </Button>
        )}
      </Stack>
    </Main>
  );
};

export default Index;
