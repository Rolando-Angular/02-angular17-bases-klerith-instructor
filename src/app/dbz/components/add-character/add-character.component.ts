import { Component, EventEmitter, Output } from "@angular/core";
import { Character } from "../../interfaces/character.interface";

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrl: '\add-character.component.css',
})
export class AddCharacterComponent {

  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    name: '',
    power: 0,
  };

  public emitCharacter(): void {
    // debugger;
    if (!this.character.name) return;

    this.onNewCharacter.emit(this.character);
    this.character = { name: '', power: 0 }
  }

}
