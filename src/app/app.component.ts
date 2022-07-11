import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  readonly title = 'Pokedex';
  readonly author = 'Wesley Cole';

  constructor() { }

  ngOnInit(): void {
    return;
  }
}