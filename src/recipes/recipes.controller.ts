import { Controller, Get } from '@nestjs/common';
import { RecipesService } from './recipes.service';

@Controller('recipes')
export class RecipesController {
  constructor(private readonly recipesService: RecipesService) {}

  @Get()
  async getAllRecipes() {
    return this.recipesService.getAllRecipes();
  }
}
