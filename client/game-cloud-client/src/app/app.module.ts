import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SimpleRacerComponent } from './modules/simple-racer/container/simple-racer.component';
import { HomeComponent } from './modules/home/container/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SimpleRacerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
