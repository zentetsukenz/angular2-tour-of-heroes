import { Component, OnInit } from '@angular/core';
import { RouteParams } from '@angular/router-deprecated';

import { HeroService } from './hero.service';

import { Hero } from './hero';

@Component({
  selector: "hero-detail",
  template: `
    <div *ngIf="hero">
      <h2>{{ hero.name }} details!</h2>
      <div>
        <label>id: </label>
        {{ hero.id }}
      </div>
      <div>
        <label>name: </label>
        <input [(ngModel)]="hero.name" placeholder="name">
      </div>
      <button (click)="back()">Back</button>
    </div>
  `,
  styleUrls: ['app/hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  hero: Hero;

  constructor(
    private heroService: HeroService,
    private routeParams: RouteParams
  ) {}

  ngOnInit() {
    let id = +this.routeParams.get('id');
    this.heroService.getHero(id)
      .then(hero => this.hero = hero)
  }

  back() {
    window.history.back()
  }
}
