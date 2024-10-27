import { Component, Input } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {

  // If this property with @input doesn't recieve data from parent component,
  // then It will used the default value
  @Input('characters')
  public characterList: Character[] = [
    {
      name: 'Trunk',
      power: 10,
    }
  ];
}
