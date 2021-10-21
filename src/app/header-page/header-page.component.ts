import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../services/countries.service';

@Component({
  selector: 'app-header-page',
  templateUrl: './header-page.component.html',
  styleUrls: ['./header-page.component.css']
})
export class HeaderPageComponent implements OnInit {
  continents = [
    { id: 'Africa', name: 'Africa' },
    { id: 'Americas', name: 'America' },
    { id: 'Asia', name: 'Asia' },
    { id: 'Europe', name: 'Europa' },
    { id: 'Oceania', name: 'Oceania' }];
  constructor(private dataService: CountriesService) { }

  ngOnInit(): void {
  }

  searchCountry(searchText: string, optionValue: any) {
    console.log('select option', optionValue)
    if (searchText.length > 0)
      this.dataService.searchCountries(searchText, optionValue);
    else
      this.dataService.getAllcountries(optionValue);
  }

}
