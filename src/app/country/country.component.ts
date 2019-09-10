import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../countries.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {
countryList:any;
  constructor(private _countryservice:CountriesService) { }

  Detail(country:string)
  {
    console.log(country);
    this._countryservice.getCountry(country)
                        .subscribe((data)=>{
                          this.countryList=data;
                        })
  }

  ngOnInit() {
  }

}
