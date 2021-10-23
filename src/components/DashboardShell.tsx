import React, { ReactNode } from "react";
import {
  Flex,
  Link,
  Avatar,
  Text,
  Stack,
  Breadcrumb,
  Heading,
  BreadcrumbItem,
  BreadcrumbLink,
} from "@chakra-ui/react";

import { Logo } from "./CustomIcons/Logo";
import { useAuth } from "@/lib/auth";

const DashboardShell = ({ children }: { children: ReactNode }) => {
  const auth = useAuth();

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
        <Stack spacing={4} isInline alignItems="center">
          <Text>Text value</Text>
          <Avatar src={auth?.user?.photoURL} />
        </Stack>
      </Flex>
      <Flex backgroundColor="gray.100" justifyContent="center" minH="100vh">
        <Breadcrumb />
        <Flex flexDirection="column" p={4} maxW="container.md" w="full">
          <Breadcrumb spacing={2}>
            <BreadcrumbItem>
              <BreadcrumbLink fontSize="sm">Sites</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
          <Heading mb="4">Sites</Heading>
          {children}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default DashboardShell;
