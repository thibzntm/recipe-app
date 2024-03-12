import { Controller, Get } from '@nestjs/common';
import { IngredientsService } from './ingredients.service';
import { IngredientDTO } from './dto/ingredient.dto';

@Controller('ingredients')
export class IngredientsController {
  constructor(private readonly ingredientsService: IngredientsService) {}

  @Get()
  async getAllIngredients(): Promise<IngredientDTO[]> {
    return this.ingredientsService.getAllIngredients();
  }
}
