import { Box, Heading, Text, Divider } from "@chakra-ui/react";
import { IFeedbackSkeleton } from "@/types/Fetch";
import { format, parseISO } from "date-fns";

const Feedback: React.FC<IFeedbackSkeleton> = ({ author, text, createdAt }) => (
  <Box borderRadius={4} maxW="700px" w="full">
    <Heading size="sm" as="h3" mb="0" color="gray.900">
      {author}
    </Heading>
    <Text color="gray.500" mb="5" fontSize="xs">
      {format(parseISO(createdAt), "PPpp")}
    </Text>
    <Text color="gray.800" mb="5">
      {text}
    </Text>
    <Divider borderColor="gray.200" mb="4" />
  </Box>
);

export default Feedback;
