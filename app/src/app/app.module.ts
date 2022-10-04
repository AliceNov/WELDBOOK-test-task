import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from "@angular/common/http";
import { MainModule } from './pages/main/main.module';
import { FavoriteModule } from './pages/favorite/favorite.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    HttpClientModule,
    MainModule,
    FavoriteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
