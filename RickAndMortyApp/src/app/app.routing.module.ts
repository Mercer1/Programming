import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterListComponent } from './components/characters-list/characters-list.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { TotalSpeciesTypeComponent } from './components/total-species-type/total-species-type.component';

const routes: Routes = [
  { path: '', redirectTo: '/characters', pathMatch: 'full' },  // Redirige a /characters
  { path: 'characters', component: CharacterListComponent },
  { path: 'favorites', component: FavoritesComponent },
  { path: 'totals', component: TotalSpeciesTypeComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
