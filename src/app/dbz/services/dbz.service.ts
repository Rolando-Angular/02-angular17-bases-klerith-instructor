import { Injectable } from "@angular/core";
import { v4 as uuidv4 } from "uuid";
import { Character } from "../interfaces/character.interface";

@Injectable({
  providedIn: 'root',
})
export class DbzService {

  public characters: Character[] = [
    {
      id: uuidv4(),
      name: 'Krillin',
      power: 1000,
    },
    {
      id: uuidv4(),
      name: 'Goku',
      power: 9500,
    },
    {
      id: uuidv4(),
      name: 'Vegeta',
      power: 7500,
    }
  ];

  public addCharacter(character: Character): void {
    const newCharacter = { ...character, id: uuidv4() }
    this.characters.push(newCharacter);
  }

  public deleteCharacterById(id: string): void {
    const charactersWithIdDiferent: Character[] = this.characters.filter(elem => id !== elem.id);
    this.characters = [...charactersWithIdDiferent];
    // this.characters.splice(index, 1)
  }


}
