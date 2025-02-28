import { Component, Input } from '@angular/core';
import { Character } from '../../../models/character.model';

@Component({
  selector: 'app-total-species-type',
  templateUrl: './total-species-type.component.html',
  styleUrls: ['./total-species-type.component.css']
})
export class TotalSpeciesTypeComponent {
  @Input() characters: Character[] = [];

  getTotalBySpecies(): { [species: string]: number } {
    return this.characters.reduce((acc: any, character: Character) => {
      acc[character.species] = (acc[character.species] || 0) + 1;
      return acc;
    }, {});
  }

  getTotalByType(): { [type: string]: number } {
    return this.characters.reduce((acc: any, character: Character) => {
      acc[character.type] = (acc[character.type] || 0) + 1;
      return acc;
    }, {});
  }
}
