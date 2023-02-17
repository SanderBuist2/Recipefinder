import { Grid } from "@chakra-ui/react";
import { MenuItem } from "./menuItem";

export const MenuItems = ({ menu, onClick }) => {
  return (
    <>
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          sm: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
          xl: "repeat(4, 1fr)",
        }}
        gap={6}
        justifyContent="center"
      >
        {menu.map(({ recipe }) => (
          <MenuItem key={recipe.label} menuOption={recipe} onClick={onClick} />
        ))}
      </Grid>
    </>
  );
};
