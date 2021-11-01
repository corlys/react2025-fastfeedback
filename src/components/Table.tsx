import {
  Table as ChakraTable,
  TableProps,
  Tr as ChakraTr,
  TableRowProps,
  Td as ChakraTd,
  TableCellProps,
  Th as ChakraTh,
  TableColumnHeaderProps,
  Thead as ChakraThead,
  TableHeadProps,
} from "@chakra-ui/react";

const Table = (props: TableProps) => (
  <ChakraTable w="full" size="md" {...props}></ChakraTable>
);

const Tr = (props: TableRowProps) => (
  <ChakraTr
    backgroundColor="gray.50"
    borderTopLeftRadius={8}
    borderTopRightRadius={8}
    borderBottom="1px solid"
    borderBottomColor="gray.200"
    height="40px"
    {...props}
  ></ChakraTr>
);

const Thead = (props: TableHeadProps) => (
  <ChakraThead bgColor="gray.200" {...props}></ChakraThead>
);

const Th = (props: TableColumnHeaderProps) => (
  <ChakraTh
    textTransform="uppercase"
    fontSize="xs"
    fontWeight="bold"
    px={4}
    {...props}
  ></ChakraTh>
);

const Td = (props: TableCellProps) => (
  <ChakraTd
    p={4}
    borderBottom="1px solid"
    borderBottomColor="gray.300"
    {...props}
  ></ChakraTd>
);

export { Table, Tr, Thead, Th, Td };
