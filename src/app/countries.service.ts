import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class CountriesService {

  constructor(private _httpClient:HttpClient)
  {

  }
  getCountry(country:string):Observable<any>
  {
    return this._httpClient.get("https://restcountries.eu/rest/v2/name/"
                            +country+"?fullText=true");
  }
}
