import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IntineraryComponent } from './components/intinerary/intinerary.component';
import { TileComponent } from './components/tile/tile.component';
import { MainComponent } from './components/main/main.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'itinerary', component: IntineraryComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
