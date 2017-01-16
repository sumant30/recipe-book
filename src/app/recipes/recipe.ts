import { Ingredient } from '../shared/ingredient';

export class Recipe {
    public constructor(public name, public description, public imagePath, public ingredients: Ingredient[]) {

    }
}
