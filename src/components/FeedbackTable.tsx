import { Table, Tr, Td, Th } from "@/components/Table";
import {
  Tbody,
  Tr as ChakraTr,
  Thead,
  Box,
  Code,
  Switch,
  IconButton,
} from "@chakra-ui/react";

import RemoveButton from "./RemoveFeedbackButton";
import { IFeedbackData } from "@/types/Fetch";

const FeedbackTable = ({ data }: { data: IFeedbackData }) => (
  <Box
    overflowX="auto"
    border="1px solid"
    borderColor="gray.100"
    borderRadius="md"
  >
    <Table>
      <Thead>
        <Tr>
          <Th>Name</Th>
          <Th>Feedback</Th>
          <Th>Route</Th>
          <Th>Visible</Th>
          <Th> </Th>
        </Tr>
      </Thead>
      <Tbody bgColor="white">
        {data.feedback.map((fb) => (
          <ChakraTr key={fb.id}>
            <Td fontWeight="medium">{fb.author}</Td>
            <Td>{fb.text}</Td>
            <Td>
              <Code>{"/"}</Code>
            </Td>
            <Td>
              <Switch defaultChecked={fb.status === "visible"} />
            </Td>
            <Td>
              <RemoveButton feedbackId={fb.id} />
            </Td>
          </ChakraTr>
        ))}
      </Tbody>
    </Table>
  </Box>
);

export default FeedbackTable;
