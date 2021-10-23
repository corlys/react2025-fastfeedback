import React from "react";
import { Text, Heading, Box, Button } from "@chakra-ui/react";

import DashboardShell from "./DashboardShell";

const FreePlanEmptyState = () => {
  return (
    <DashboardShell>
      <Box
        backgroundColor="white"
        width="full"
        borderRadius={8}
        p={8}
        height="full"
      >
        <Heading size="md">Get feedback for your website</Heading>
        <Text>Start today and grow with us!</Text>
        <Button variant="solid" size="md">
          Upgrade to Starter
        </Button>
      </Box>
    </DashboardShell>
  );
};

export default FreePlanEmptyState;
