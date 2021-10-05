import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { bootstrap } from 'bootstrap'

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipeLibraryComponent } from './recipe-library/recipe-library.component';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipeLibraryComponent,
    AddRecipeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
