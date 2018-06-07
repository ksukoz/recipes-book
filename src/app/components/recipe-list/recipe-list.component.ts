import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Recipe } from '../../models/Recipe';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('A test', 'This is a test recipe', 'https://images.pexels.com/photos/23086/food-restaurant-kitchen-meat-23086.jpg'),
    new Recipe('A test', 'This is a second test recipe', 'https://images.pexels.com/photos/76093/pexels-photo-76093.jpeg'),
    new Recipe('A test', 'This is a third test recipe', 'https://images.pexels.com/photos/156114/pexels-photo-156114.jpeg')

  ];
  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe:Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
