import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SimpleRacerModule } from './modules/simple-racer/simple-racer.module';
import { AlienInvasionModule } from './modules/alien-invasion/alien-invasion.module';
import { HomeModule } from './modules/home/home.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    AlienInvasionModule,
    SimpleRacerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
