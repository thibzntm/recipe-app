import { Injectable } from '@nestjs/common';

@Injectable()
export class RecipesService {
  async getAllRecipes() {
    
    return [
      { id: 1, name: 'Pates au poivron', description: 'Pates sautés aux poivrons' },
      { id: 2, name: 'Pizza mozzarella', description: 'Pizza à la mozza fondu' },
    ];
  }
}
