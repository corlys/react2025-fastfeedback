import { Table, Tr, Td, Th, Thead, Tbody, Link, Box } from "@chakra-ui/react";
import { format, parseISO } from "date-fns";
import NextLink from "next/link";

import { ISiteData } from "@/types/Fetch";

const SiteTable = ({ data }: { data: ISiteData }) => (
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
        {data.sites.map((site) => (
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
              <NextLink href="/p/[siteId]" as={`/p/${site.id}`}>
                <Link>View Feedback</Link>
              </NextLink>
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
