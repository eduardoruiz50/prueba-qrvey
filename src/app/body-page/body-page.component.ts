import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CountryDialogComponent } from '../country-dialog/country-dialog.component';
import { CountriesService } from '../services/countries.service';

@Component({
  selector: 'app-body-page',
  templateUrl: './body-page.component.html',
  styleUrls: ['./body-page.component.css']
})
export class BodyPageComponent implements OnInit {
  @Input() countryFilter = '';
  allcountries: any;
  constructor(private dataService: CountriesService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.dataService.getAllcountries(0);
    this.dataService.currentCountryData.subscribe(countryData => (this.allcountries = countryData));
  }

  openDialog(countryData: any): void {
    const dialogRef = this.dialog.open(CountryDialogComponent, {
      width: '500px',
      height: '450px',
      data: countryData
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
