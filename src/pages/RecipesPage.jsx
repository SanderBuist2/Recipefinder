import { useState } from "react";
import { data } from "../utils/data";
import { SearchMenu } from "../components/SearchMenu";
import { RecipeDisplay } from "../components/RecipeDisplay";

export const RecipesPage = () => {
  const [userChoice, setUserChoice] = useState();
  console.log("userChoice is:");
  console.log(userChoice);
  return (
    <>
      {userChoice && (
        <RecipeDisplay recipe={userChoice} onClick={setUserChoice} />
      )}
      {!userChoice && <SearchMenu menu={data.hits} onClick={setUserChoice} />}
    </>
  );
};
