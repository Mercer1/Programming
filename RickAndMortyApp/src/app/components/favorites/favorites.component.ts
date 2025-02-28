import { Component, Input } from '@angular/core';
import { Character } from '../../../models/character.model';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent {
  @Input() favoriteCharacter!: Character;

  // Método para mostrar detalles del personaje favorito
  showFavoriteDetails(): void {
    if (this.favoriteCharacter) {
      // Mostrar detalles del personaje favorito
    }
  }
}
