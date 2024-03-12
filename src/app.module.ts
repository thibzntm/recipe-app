import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { IngredientsModule } from './ingredients/ingredients.module';
import { RecipesModule } from './recipes/recipes.module';

@Module({
  imports: [
    IngredientsModule,
    RecipesModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
