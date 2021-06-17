import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Balls of meat', 'These are huge thick balls', 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.btiLYZZEhAgjQxgiOqAq3gHaJQ%26pid%3DApi&f=1',

    )
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
