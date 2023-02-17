import { Text, Center } from "@chakra-ui/react";

export const HealthLabels = ({ labels }) => {
  const vegetarian = labels.includes("Vegetarian");
  const vegan = labels.includes("Vegan");
  return (
    <>
      <Center flexDir="row">
        {vegetarian && (
          <Text
            fontSize="sm"
            m="1"
            paddingLeft="0.5"
            paddingRight="0.5"
            bg="orange"
          >
            Vegetarian
          </Text>
        )}
        {vegan && (
          <Text
            fontSize="sm"
            m="1"
            paddingLeft="0.5"
            paddingRight="0.5"
            bg="orange"
          >
            Vegan
          </Text>
        )}
      </Center>
    </>
  );
};
