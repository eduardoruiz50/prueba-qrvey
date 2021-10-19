import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../services/countries.service';

@Component({
  selector: 'app-body-page',
  templateUrl: './body-page.component.html',
  styleUrls: ['./body-page.component.css']
})
export class BodyPageComponent implements OnInit {
  allcountries = [];
  constructor(private dataService: CountriesService) { }

  ngOnInit(): void {
    this.dataService.getcountries().subscribe((data: any) => {
      console.log('listado paises', data);
      this.allcountries = data;
    })
  }

}
