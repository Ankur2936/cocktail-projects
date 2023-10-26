import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CocktailComponent } from './cocktail/cocktail.component';
import { CocktailDetailsComponent } from './cocktail/cocktail-details/cocktail-details.component';

export const APP_ROUTES: Routes = [
  { path: '', redirectTo: 'cocktail', pathMatch: 'full' },
  { path: 'cocktail', component: HomeComponent },
  { path: 'details', component: CocktailDetailsComponent},
  { path: 'margarita', component: CocktailComponent },
  { path: 'mojito', component: CocktailComponent },
];;


@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
