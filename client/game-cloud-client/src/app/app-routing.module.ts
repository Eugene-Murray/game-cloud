import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './modules/home/container/home.component';
import { SimpleRacerComponent } from './modules/simple-racer/container/simple-racer.component';
import { AlienInvasionComponent } from './modules/alien-invasion/container/alien-invasion.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'simple-racer', component: SimpleRacerComponent },
  { path: 'alien-invasion', component: AlienInvasionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
