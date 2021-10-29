import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Flex,
  Heading,
} from "@chakra-ui/react";

import AddSiteModal from "./AddSiteModal";

const SiteTableHeader = () => {
  return (
    <>
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
    </>
  );
};

export default SiteTableHeader;
