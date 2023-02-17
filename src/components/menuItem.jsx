import { Center, Image, Text, Heading, Box } from "@chakra-ui/react";
import { HealthLabels } from "./HealtLabels";
import { DietLabels } from "./dietLabels";
import { AllergieLabels } from "./allergieLabels";

export const MenuItem = ({ menuOption, onClick }) => {
  return (
    <>
      <Box
        onClick={() => onClick(menuOption)}
        flexDir="column"
        borderRadius="20px"
        bg="white"
        w={{ base: "100%", md: "250px" }}
        h={{ base: "100%", md: "400px" }}
        alignItems="center"
      >
        <Image
          src={menuOption.image}
          w={{ base: "100%", md: "250px" }}
          h={{ base: "300px", md: "150px" }}
          borderTopRadius="20px"
        ></Image>
        <Center flexDir="column">
          <Text color="grey">{menuOption.mealType}</Text>
          <Heading textAlign="center" size="md" margin="1">
            {menuOption.label}
          </Heading>
          <HealthLabels labels={menuOption.healthLabels} />
          <DietLabels menuOption={menuOption}></DietLabels>
          <Text>Dish: {menuOption.dishType}</Text>
          <AllergieLabels labels={menuOption.cautions}></AllergieLabels>
        </Center>
      </Box>
    </>
  );
};
