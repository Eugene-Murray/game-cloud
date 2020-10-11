import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './modules/home/container/home.component';
import { SimpleRacerComponent } from './modules/simple-racer/container/simple-racer.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'simple-racer', component: SimpleRacerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
