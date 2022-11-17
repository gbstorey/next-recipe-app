import Head from 'next/head'
import RecipeSearchForm from "../components/RecipeSearchForm";
import {useState} from "react";
import Recipe from "../models/recipe-model";
import Image from "next/image";

export default function Home() {
    const [recipes, setRecipes] = useState<Recipe[]>([]);
    const onSearchHandler = (recipeList: Recipe[]) => {
        setRecipes(recipeList);
    }
  return (
    <div>
      <Head>
        <title>Recipe App</title>
        <meta name="description" content="Search for new recipes" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
          {recipes.map(recipe => {
              return <div key={recipe.id}>
                  <h1>{recipe.title}</h1>
                  {recipe.image && <Image src={recipe.image} alt={"image of" + recipe.title} width={100} height={100}/>}
              </div>
          })}
          <RecipeSearchForm onSearch={onSearchHandler}/>
      </main>

      <footer>
      </footer>
    </div>
  )
}
