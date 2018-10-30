import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { ListBonbonsComponent } from './list-bonbons/list-bonbons.component';
import { ReglesJeuComponent } from './regles-jeu/regles-jeu.component';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    ListBonbonsComponent,
    ReglesJeuComponent,
  ],
  imports: [
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBNiGHB5tcAsl9ilspi0aqb093Nlvdy5L8'
    }),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
