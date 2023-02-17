import {
  Text,
  Button,
  Image,
  Box,
  Heading,
  Grid,
  GridItem,
  Center,
} from "@chakra-ui/react";
import { ListDisplay } from "./displayList";
import { DisplayNutrients } from "./DisplayNutrients";

export const RecipeDisplay = ({ recipe, onClick }) => {
  return (
    <>
      <Box bg="aqua" p="2">
        <Center flexDir={{ base: "column", md: "row" }}>
          <Heading textAlign="center">{recipe.label}</Heading>
          <Button
            m="2"
            marginLeft={{ base: "2", md: "8" }}
            onClick={() => onClick()}
            w={{ base: "300px", md: "100px" }}
            bg="darkblue"
            color="white"
            _hover={{
              color: "black",
              bg: "white",
            }}
          >
            Back
          </Button>
        </Center>
        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            lg: "1fr 968px 1fr",
          }}
          gap="6"
        >
          <GridItem colStart={{ base: "1", lg: "2" }}>
            <Grid
              templateColumns={{
                base: "repeat(1, 1fr)",
                sm: "repeat(2, 1fr)",
                md: "repeat(3, 1fr)",
              }}
              gap="6"
            >
              <Image src={recipe.image} boxSize="300"></Image>
              <Box border="solid" borderColor="grey" p="1">
                <Text>Mealtype: {recipe.mealType}</Text>
                <Text>Dish: {recipe.dishType}</Text>
                <Text>Preperation time: {recipe.totalTime}</Text>
                <Text>DietLabels: {recipe.dietLabels}</Text>
                <Text>Number of servings: {recipe.yield}</Text>
                <ListDisplay
                  list={recipe.cautions}
                  title="cautions:"
                  titleColor="red"
                  border=""
                />
              </Box>
              <ListDisplay list={recipe.ingredientLines} title="ingredients:" />
              <ListDisplay
                list={recipe.healthLabels}
                title="Health benefits:"
                titleColor="green"
              />
              <DisplayNutrients list={recipe.totalNutrients} />
            </Grid>
          </GridItem>
        </Grid>
      </Box>
    </>
  );
};
