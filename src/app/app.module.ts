import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CocktailComponent } from './cocktail/cocktail.component';
import { CommanService } from './comman.service';
import { HttpClientModule } from '@angular/common/http';
import { CocktailDetailsComponent } from './cocktail/cocktail-details/cocktail-details.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CocktailComponent,
   
    CocktailDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [CommanService],
  bootstrap: [AppComponent]
})
export class AppModule { }
