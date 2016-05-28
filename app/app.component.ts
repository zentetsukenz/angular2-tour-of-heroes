import { Component } from '@angular/core';
import { Hero } from './hero';
import { HeroDetailComponent } from './hero-detail.component';

@Component({
  selector: 'app',
  template: `
    <h1>{{ title }}</h1>

    <h2>My Heroes</h2>
    <ul class="heroes">
      <li *ngFor="let hero of heroes"
        (click)="onSelect(hero)"
        [class.selected]="hero === selectedHero">
        <span class="badge">{{ hero.id }}</span>
        {{ hero.name }}
      </li>
    </ul>

    <hero-detail [hero]="selectedHero"></hero-detail>
  `,

  styles: [`
    .selected {
      background-color: #CFD8DC !important;
      color: white;
    }
    .heroes {
      margin: 0 0 2em 0;
      list-style-type: none;
      padding: 0;
      width: 15em;
    }
    .heroes li {
      cursor: pointer;
      position: relative;
      left: 0;
      background-color: #EEE;
      margin: .5em;
      padding: .3em 0;
      height: 1.6em;
      border-radius: 4px;
    }
    .heroes li.selected:hover {
      background-color: #BBD8DC !important;
      color: white;
    }
    .heroes li:hover {
      color: #607D8B;
      background-color: #DDD;
      left: .1em;
    }
    .heroes .text {
      position: relative;
      top: -3px;
    }
    .heroes .badge {
      display: inline-block;
      font-size: small;
      color: white;
      padding: 0.8em 0.7em 0 0.7em;
      background-color: #607D8B;
      line-height: 1em;
      position: relative;
      left: -1px;
      top: -4px;
      height: 1.8em;
      margin-right: .8em;
      border-radius: 4px 0 0 4px;
    }
  `],
  directives: [HeroDetailComponent]
})
export class AppComponent {
  title = "Company Of Heroes";
  selectedHero: Hero;

  public heroes = HEROES;

  onSelect(hero: Hero) {
    this.selectedHero = hero;
  }
}

var HEROES: Hero[] = [
  { "id": 11, "name": "Orgrim Doomhammer" },
  { "id": 12, "name": "Jaina Proudmoore" },
  { "id": 13, "name": "Gul'dan" },
  { "id": 14, "name": "Arthas" },
  { "id": 15, "name": "Illidan Stormrage" },
  { "id": 16, "name": "Kel'Thuzad" },
  { "id": 17, "name": "Sylvanas Windrunner" },
  { "id": 18, "name": "Archimonde" },
  { "id": 19, "name": "Grom Hellscream" },
  { "id": 20, "name": "Sen'Jin" }
];
