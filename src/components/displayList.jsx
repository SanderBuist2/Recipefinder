import { Text, Box } from "@chakra-ui/react";

export const ListDisplay = ({ list, title, titleColor, border }) => {
  if (typeof border === "undefined") border = "solid";
  return (
    <>
      <Box flexDir="column" border={border} borderColor="grey" p="1">
        {title && <Text color={titleColor}>{title}</Text>}
        {list.map((item) => {
          return <Text key={item}>{item}</Text>;
        })}
      </Box>
    </>
  );
};
