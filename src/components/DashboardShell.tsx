import React, { ReactNode } from "react";
import {
  Flex,
  Link,
  Avatar,
  Button,
  Stack,
  useColorMode,
} from "@chakra-ui/react";
import NextLink from "next/link";

import { Logo } from "./CustomIcons/Logo";
import { useAuth } from "@/lib/auth";
import { DarkModeSwitch } from "./DarkModeSwitch";

const DashboardShell = ({ children }: { children: ReactNode }) => {
  const { colorMode } = useColorMode();
  const auth = useAuth();
  console.log(auth.user);
  return (
    <Flex flexDirection="column">
      <Flex
        justifyContent="space-between"
        backgroundColor={colorMode === "light" ? "white" : "gray.700"}
        alignItems="center"
        p={4}
      >
        <Stack spacing={4} isInline alignItems="center">
          <Logo color="black" boxSize="10" />
          <NextLink href="/dashboard" as={"/dashboard"}>
            <Link>Sites</Link>
          </NextLink>
          <NextLink href="/feedback" as={"/feedback"}>
            <Link>Feedback</Link>
          </NextLink>
        </Stack>
        <Stack spacing={2} isInline alignItems="center">
          <DarkModeSwitch />
          {auth?.user && (
            <Button
              onClick={() => {
                auth.signout();
              }}
              variant="ghost"
            >
              Log Out
            </Button>
          )}
          <Avatar src={auth?.user?.photoURL} />
        </Stack>
      </Flex>
      <Flex
        backgroundColor={colorMode === "light" ? "gray.100" : "gray.800"}
        justifyContent="center"
        minH="100vh"
      >
        <Flex flexDirection="column" p={4} maxW="container.md" w="full" my="4">
          {children}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default DashboardShell;
