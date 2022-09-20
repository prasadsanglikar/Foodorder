import { NgModule } from '@angular/core';
import {FormsModule}from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxStarRatingModule } from 'ngx-star-rating';
import { SearchComponent } from './search/search.component';
import { TagsComponent } from './tags/tags.component';
import { CaetPageComponent } from './caet-page/caet-page.component';
import { FoodpageComponent } from './foodpage/foodpage.component'


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SearchComponent,
    TagsComponent,
    CaetPageComponent,
    FoodpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
   NgbModule,
    NgxStarRatingModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
