import { Center, Stack, StackProps } from "@chakra-ui/react";

export const Main = (props: StackProps) => (
  <Center>
    <Stack
      spacing="1.5rem"
      width="100%"
      maxWidth="48rem"
      pt="8rem"
      px="1rem"
      {...props}
    />
  </Center>
);
