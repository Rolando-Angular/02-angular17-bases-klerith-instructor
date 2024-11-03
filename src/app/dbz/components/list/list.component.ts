import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {

  @Output()
  public onDeleteEmitter: EventEmitter<string> = new EventEmitter();

  // If this property with @input doesn't recieve data from parent component,
  // then It will used the default value
  @Input('characters')
  public characterList: Character[] = [
    {
      name: 'Trunk',
      power: 10,
    }
  ];

  public onDeleteCharacter(id?: string): void {
    if (!id) {
      return;
    }
    this.onDeleteEmitter.emit(id);
  }

}
