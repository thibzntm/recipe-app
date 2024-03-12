import { Injectable } from '@nestjs/common';

@Injectable()
export class IngredientsService {
  async getAllIngredients() {
    
    return [
      { id: 1, name: 'Pate', quantity: 100, unit: 'g', category: 'féculent' },
      { id: 2, name: 'Poivron', quantity: 200, unit: 'g', category: 'légume' },
      { id: 3, name: 'Pate à pizza', quantity: 1, unit: '', category: 'féculent' },
      { id: 4, name: 'Mozarella', quantity: 300, unit: 'g', category: 'fromage' },
    ];
  }
}
