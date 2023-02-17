import { Input, Center } from "@chakra-ui/react";
import { useState } from "react";
import { MenuItems } from "./menuItems";

export const SearchMenu = ({ menu, onClick }) => {
  const [searchField, setSearchField] = useState("");
  const searchHandler = (event) => setSearchField(event.target.value);
  const foundRecipes = menu.filter(({ recipe }) => {
    return recipe.label.toLowerCase().includes(searchField.toLowerCase());
  });
  return (
    <>
      <Center bg="lightblue" flexDir="column">
        <label>Find a recipe:</label>
        <Input
          onChange={searchHandler}
          bg="white"
          w={{ base: "15em", md: "30em" }}
          m="2"
        ></Input>
        <MenuItems menu={foundRecipes} onClick={onClick}></MenuItems>
      </Center>
    </>
  );
};
//
//
