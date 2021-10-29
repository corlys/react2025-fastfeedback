import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Flex,
  Heading,
} from "@chakra-ui/react";

const FeedbackTableHeader = () => {
  return (
    <>
      <Breadcrumb spacing={2}>
        <BreadcrumbItem>
          <BreadcrumbLink fontSize="sm">Feedback</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      <Flex justify="space-between" direction="row" mb="8">
        <Heading>Feedbacks</Heading>
      </Flex>
    </>
  );
};

export default FeedbackTableHeader;
