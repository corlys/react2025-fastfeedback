import { Table, Tr, Td, Th, Thead, Tbody, Link, Box } from "@chakra-ui/react";
import { format, parseISO } from "date-fns";

import { ISiteFetch } from "@/types/Fetch";

const SiteTable = ({ sites }: { sites: ISiteFetch[] }) => (
  <Box
    overflowX="auto"
    border="1px solid"
    borderColor="gray.100"
    borderRadius="md"
  >
    <Table w="full" size="md">
      <Thead bgColor="gray.200">
        <Tr
          backgroundColor="gray.50"
          borderTopLeftRadius={8}
          borderTopRightRadius={8}
          borderBottom="1px solid"
          borderBottomColor="gray.200"
          height="40px"
        >
          <Th
            textTransform="uppercase"
            fontSize="xs"
            color="gray.500"
            fontWeight="bold"
            px={4}
          >
            Name
          </Th>
          <Th
            textTransform="uppercase"
            fontSize="xs"
            color="gray.500"
            fontWeight="bold"
            px={4}
          >
            Site Link
          </Th>
          <Th
            textTransform="uppercase"
            fontSize="xs"
            color="gray.500"
            fontWeight="bold"
            px={4}
          >
            Feedback Link
          </Th>
          <Th
            textTransform="uppercase"
            fontSize="xs"
            color="gray.500"
            fontWeight="bold"
            px={4}
          >
            Date Added
          </Th>
          <Th
            textTransform="uppercase"
            fontSize="xs"
            color="gray.500"
            fontWeight="bold"
            px={4}
          >
            {" "}
          </Th>
        </Tr>
      </Thead>
      <Tbody>
        {sites.map((site) => (
          <Tr key={site.url} bgColor="white">
            <Td
              color="gray.900"
              p={4}
              borderBottom="1px solid"
              borderBottomColor="gray.300"
              fontWeight="medium"
            >
              {site.name}
            </Td>
            <Td
              color="gray.900"
              p={4}
              borderBottom="1px solid"
              borderBottomColor="gray.300"
            >
              {site.url}
            </Td>
            <Td
              color="gray.900"
              p={4}
              borderBottom="1px solid"
              borderBottomColor="gray.300"
            >
              <Link>View Feedback</Link>
            </Td>
            <Td
              color="gray.900"
              p={4}
              borderBottom="1px solid"
              borderBottomColor="gray.300"
            >
              {format(parseISO(site.createdAt), "PPpp")}
            </Td>
            <Td
              color="gray.900"
              p={4}
              borderBottom="1px solid"
              borderBottomColor="gray.300"
            >
              {" "}
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  </Box>
);

export default SiteTable;
