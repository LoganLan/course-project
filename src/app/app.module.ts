import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './root/header/header.component';
import { RecipeBookComponent } from './root/Header/recipe-book/recipe-book.component';
import { RecipeListComponent } from './root/Header/recipe-book/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './root/Header/recipe-book/recipe-list/recipe-item/recipe-item.component';
import { RecipeItemDetailsComponent } from './root/header/recipe-book/recipe-list/recipe-item-details/recipe-item-details.component';
import { ShoppingListComponent } from './root/Header/shopping-list/shopping-list.component';
import { ShoppingListEditComponent } from './root/Header/shopping-list/shopping-list-edit/shopping-list-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipeBookComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeItemDetailsComponent,
    ShoppingListComponent,
    ShoppingListEditComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
