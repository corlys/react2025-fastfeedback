import React from "react";
import { Text, Heading, Button, Flex } from "@chakra-ui/react";

import AddSiteModal from "./AddSiteModal";

const EmptyState = () => {
  return (
    <Flex
      direction="column"
      align="center"
      backgroundColor="white"
      borderRadius={8}
      p={16}
    >
      <Heading mb="2" size="lg">
        You haven't added any website
      </Heading>
      <Text mb="4">Welcome let's get started!</Text>
      <AddSiteModal />
    </Flex>
  );
};

export default EmptyState;
