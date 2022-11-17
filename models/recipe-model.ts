class Recipe {
    id: number;
    title: string;
    image: string;
    imageType: string;
    constructor(recipe: {id: number, title: string, image: string, imageType: string}) {
        this.id = recipe.id;
        this.title = recipe.title;
        this.image = recipe.image;
        this.imageType = recipe.imageType;
    }
}

export default Recipe;