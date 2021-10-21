import {
  Link as ChakraLink,
  Text,
  Code,
  List,
  ListIcon,
  ListItem,
  Stack,
  Button,
} from "@chakra-ui/react";
import { CheckCircleIcon, LinkIcon } from "@chakra-ui/icons";

import { Hero } from "../components/Hero";
import { Container } from "../components/Container";
import { Main } from "../components/Main";
import { DarkModeSwitch } from "../components/DarkModeSwitch";
import { CTA } from "../components/CTA";
import { Footer } from "../components/Footer";
import { useAuth } from "../lib/auth";

const Index = () => {
  const auth = useAuth();
  return (
    <Container height="100vh">
      <Hero />
      <Main>
        <Text>
          Example repository of <Code>Next.js</Code> + <Code>chakra-ui</Code> +{" "}
          <Code>typescript</Code>.
        </Text>

        <List spacing={3} my={0}>
          <ListItem>
            <ListIcon as={CheckCircleIcon} color="green.500" />
            <ChakraLink
              isExternal
              href="https://chakra-ui.com"
              flexGrow={1}
              mr={2}
            >
              Chakra UI <LinkIcon />
            </ChakraLink>
          </ListItem>
          <ListItem>
            <ListIcon as={CheckCircleIcon} color="green.500" />
            <ChakraLink
              isExternal
              href="https://nextjs.org"
              flexGrow={1}
              mr={2}
            >
              Next.js <LinkIcon />
            </ChakraLink>
          </ListItem>
        </List>
        <Stack spacing={4}>
          <Button
            onClick={() => {
              auth.signInWithGitHub();
            }}
          >
            Sign In
          </Button>
          {auth?.email && <Text>{auth?.email}</Text>}
          {auth?.email && (
            <Button
              onClick={() => {
                auth.signout();
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
