import { Text, Table, Tr, Td, TableContainer } from "@chakra-ui/react";

export const DisplayNutrients = ({ list }) => {
  const keyList = Object.keys(list);
  return (
    <>
      <TableContainer border="solid" borderColor="grey">
        <Text>Nutrients:</Text>
        <Table variant="unstyled" size="sm">
          {keyList.map((item) => {
            return (
              <>
                <Tr>
                  <Td>{list[item].label}</Td>
                  <Td textAlign="right">
                    {Math.round(list[item].quantity)} {list[item].unit}
                  </Td>
                </Tr>
              </>
            );
          })}
        </Table>
      </TableContainer>
    </>
  );
};
