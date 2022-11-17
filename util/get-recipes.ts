import {key} from "./api_key";

export async function getRecipes(phrase: string) {
    const res = await fetch("https://api.spoonacular.com/recipes/complexSearch/?" + new URLSearchParams({
        query: phrase,
        apiKey: key
    }),
        {
            headers: {'Content-Type': 'application/json'},
        });
    const data = await res.json();
    if (res.ok) {
        console.log(data)
        return data
    } else {
        console.log("An error occurred");
    }
}