import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app.routing.module';
import { CharacterListComponent } from './components/characters-list/characters-list.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { TotalSpeciesTypeComponent } from './components/total-species-type/total-species-type.component';

@NgModule({
  declarations: [
    AppComponent,
    CharacterListComponent,
    FavoritesComponent,
    TotalSpeciesTypeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule, // Asegúrate de que está en 'imports'
    AppRoutingModule  // Importando el archivo de rutas
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
