import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Character } from '../models/character.model';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  private apiUrl = 'https://rickandmortyapi.com/api/character';

  constructor(private http: HttpClient) {}

  // Método para obtener personajes desde la API usando REST
  getCharacters(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  // Método para obtener los detalles de un personaje
  getCharacterDetails(id: number): Observable<Character> {
    return this.http.get<Character>(`${this.apiUrl}/${id}`);
  }
}
