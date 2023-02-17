import { Text, Center } from "@chakra-ui/react";
export const DietLabels = ({ menuOption }) => {
  return (
    <>
      <Center flexDir="row">
        {menuOption.dietLabels.map((label) => (
          <Text
            key={menuOption.label}
            m="1"
            paddingLeft="0.5"
            paddingRight="0.5"
            bg="lightblue"
          >
            {" "}
            {label}
          </Text>
        ))}
      </Center>
    </>
  );
};
