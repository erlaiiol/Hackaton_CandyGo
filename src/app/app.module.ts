import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AgmCoreModule } from '@agm/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { ListBonbonsComponent } from './list-bonbons/list-bonbons.component';
import { AgmSnazzyInfoWindowModule } from '@agm/snazzy-info-window';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    ListBonbonsComponent
  ],
  imports: [
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBNiGHB5tcAsl9ilspi0aqb093Nlvdy5L8'
    }),
    BrowserModule,
    HttpClientModule,
    AgmSnazzyInfoWindowModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
