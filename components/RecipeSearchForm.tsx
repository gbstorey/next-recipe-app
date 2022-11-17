import {FormEvent, useRef} from "react";
import {getRecipes} from "../util/get-recipes";
import Recipe from "../models/recipe-model";
import React from "react";

const RecipeSearchForm: React.FC<{onSearch: (recipeList: Recipe[]) => void}> = (props) => {
    const formRef = useRef<HTMLInputElement>(null);
    const onSubmitHandler = (event: FormEvent) => {
        event.preventDefault();
        getRecipes(formRef.current!.value).then(
            data => {
                console.log(data)
                console.log(data.results)
                props.onSearch(data.results)
            }
        );
    }

    return <form onSubmit={onSubmitHandler}>
        <label htmlFor={'recipeInput'}> Search for a Recipe </label>
        <input type={'text'} id={'recipeInput'} ref={formRef}/>
        <button>Search</button>
    </form>
}

export default RecipeSearchForm;