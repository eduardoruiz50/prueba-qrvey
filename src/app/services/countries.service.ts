import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError, ObservableInput, Subject, BehaviorSubject } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  apiURL = 'https://restcountries.com/v3/all';

  constructor(private http: HttpClient) { }

  public editDataDetails: any = [];
  public subject = new Subject<any>();
  public allcountries: any = [];
  private countryDataSource = new BehaviorSubject(this.editDataDetails);
  currentCountryData = this.countryDataSource.asObservable();
  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  searchCountries(text: string, continent: any) {
    let valor = this.allcountries.filter((element: { name: string; }) => element.name.toUpperCase().search(text.toUpperCase()) > -1 ? true : false)
    if (continent != 0) {
      valor = valor.filter((element: { region: string }) => element.region === continent)
    }
    this.countryDataSource.next(valor);
  }
  getAllcountries(continent: any) {

    this.http.get<any>(this.apiURL).subscribe((data: []) => {

      this.allcountries = data.map(function (country, index, array) {
        let countryval: any;
        //console.log('full country', country);
        return countryval = {
          "name": country["name"]["common"],
          "region": country["region"],
          "flag": country["flag"],
          "population": country["population"],
          "capital": country["capital"],
          "currency": country["currencies"],
          "language": country["languages"],
          "borderCountries": country["borders"]
        }
      });

      this.allcountries.sort((one: { name: string; }, two: { name: string; }) => (one.name < two.name ? -1 : 1));
      console.log('continent', continent)
      if (continent != 0) {
        const valor = this.allcountries.filter((element: { region: string }) => element.region === continent)
        this.countryDataSource.next(valor);
      } else {
        console.log('continent-->', continent);
        this.countryDataSource.next(this.allcountries);
      }

      console.log("data:", this.allcountries)
    })


  }

}

