import { Center, Text } from "@chakra-ui/react";

export const AllergieLabels = ({ labels }) => {
  const haveAllergies = labels.length > 0;
  return (
    <>
      {haveAllergies && <Text>Allergies:</Text>}
      <Center flexDir="row">
        {labels.map((label) => (
          <Text key={label} bg="red.300" paddingLeft="1" paddingRight="1">
            {label}
          </Text>
        ))}
      </Center>
    </>
  );
};
