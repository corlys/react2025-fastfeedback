import React, { ReactNode } from "react";
import {
  Flex,
  Link,
  Avatar,
  Button,
  Stack,
  Breadcrumb,
  Heading,
  BreadcrumbItem,
  BreadcrumbLink,
} from "@chakra-ui/react";
import { useRouter } from "next/router";

import { Logo } from "./CustomIcons/Logo";
import { useAuth } from "@/lib/auth";
import AddSiteModal from "./AddSiteModal";
import { DarkModeSwitch } from "./DarkModeSwitch";

const DashboardShell = ({ children }: { children: ReactNode }) => {
  const auth = useAuth();
  const router = useRouter();
  return (
    <Flex flexDirection="column">
      <Flex
        justifyContent="space-between"
        backgroundColor="white"
        alignItems="center"
        p={4}
      >
        <Stack spacing={4} isInline alignItems="center">
          <Logo color="black" boxSize="10" />
          <Link>Sites</Link>
          <Link>Feedback</Link>
        </Stack>
        <Stack spacing={2} isInline alignItems="center">
          <DarkModeSwitch />
          {auth?.user && (
            <Button
              onClick={() => {
                auth.signout();
                router.push("/");
              }}
              variant="ghost"
            >
              Log Out
            </Button>
          )}
          <Avatar src={auth?.user?.photoURL} />
        </Stack>
      </Flex>
      <Flex backgroundColor="gray.100" justifyContent="center" minH="100vh">
        <Flex flexDirection="column" p={4} maxW="container.md" w="full" my="4">
          <Breadcrumb spacing={2}>
            <BreadcrumbItem>
              <BreadcrumbLink fontSize="sm">Sites</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
          <Flex justify="space-between" direction="row" mb="8">
            <Heading>Sites</Heading>
            <AddSiteModal
              bgColor="gray.900"
              color="white"
              fontWeight="medium"
              _hover={{ bg: "gray.700" }}
              _active={{ bg: "gray.800", transform: "scale(0.95)" }}
            >
              + Add Site
            </AddSiteModal>
          </Flex>
          {children}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default DashboardShell;
