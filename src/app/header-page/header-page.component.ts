import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-page',
  templateUrl: './header-page.component.html',
  styleUrls: ['./header-page.component.css']
})
export class HeaderPageComponent implements OnInit {
  continents = [
    { id: 1, name: 'Africa' },
    { id: 2, name: 'America' },
    { id: 3, name: 'Asia' },
    { id: 3, name: 'Europe' },
    { id: 3, name: 'Oceania' }];
  constructor() { }

  ngOnInit(): void {
  }

}
