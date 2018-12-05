import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TileComponent } from './components/tile/tile.component';
import { HttpClientModule } from '@angular/common/http';
import { IntineraryComponent } from './components/intinerary/intinerary.component';
import { MainComponent } from './components/main/main.component';


@NgModule({
  declarations: [
    AppComponent,
    TileComponent,
    IntineraryComponent,
    MainComponent
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
