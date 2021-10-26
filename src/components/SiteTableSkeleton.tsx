import { Skeleton, Table, Tr, Td, Th, Thead, Tbody } from "@chakra-ui/react";

const SkeletonRow = ({ width }: { width: string }) => (
  <Tr>
    <Td>
      <Skeleton height="2.5" w={width} my="4" />
    </Td>
    <Td>
      <Skeleton height="2.5" w={width} />
    </Td>
    <Td>
      <Skeleton height="2.5" w={width} />
    </Td>
    <Td>
      <Skeleton height="2.5" w={width} />
    </Td>
    <Td>
      <Skeleton height="2.5" w={width} />
    </Td>
  </Tr>
);

const SiteTableSkeleton = () => (
  <Table>
    <Thead>
      <Tr>
        <Th>Name</Th>
        <Th>Site Link</Th>
        <Th>Feedback Link</Th>
        <Th>Date Added</Th>
        <Th> </Th>
      </Tr>
    </Thead>
    <Tbody>
      <SkeletonRow width="20" />
      <SkeletonRow width="32" />
      <SkeletonRow width="14" />
      <SkeletonRow width="24" />
      <SkeletonRow width="20" />
    </Tbody>
  </Table>
);

export default SiteTableSkeleton;
