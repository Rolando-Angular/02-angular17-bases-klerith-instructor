import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name: string = 'ironman';
  public age: number = 45;

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  public getHeroDescription(): string {
    return `${this.name} - ${this.age}`;
  }

  public changeName(): void {
    this.name = 'spiderman';
  }

  public changeAge(): void {
    this.age = 50;
  }

  public resetForm(): void {
    // this.name = 'ironman';
    this.age = 45;
    /*
      Its not recomend to use javascript in that way because it's no parte
      from angular live cycle
    */
    // document.querySelector('dd')!.textContent = 'David';
  }

}
