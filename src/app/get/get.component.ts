import { Component, OnInit, Injectable, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormControl } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { DataService } from '../data.service';
import { Country } from '../models/country.model';
import { State } from '../models/state.model';

@Component({
  selector: 'app-get',
  templateUrl: './get.component.html',
  styleUrls: ['./get.component.css'],
  providers: [DataService]
})
export class GetComponent implements OnInit{
  
  @ViewChild("f") f:NgForm;
  public new_CountryName;
  public new_CountryCode;
  public countries: Country[];
  public states: State[];
  selectform: FormGroup;
  

  constructor(private fb: FormBuilder, private http: HttpClient, private dataService: DataService) {
    this. selectform = fb.group({  
      'id': [null]   // will use the property in html page  
      })  
  }

  getCountryList(){
    this.dataService.getCountries().toPromise().then(res => {
      console.log("Succesful get request for countries");
      this.countries = res;
    }, errMsg => {
      console.log("Error in Countries Get Request")
    });
  }

  getStateList(countryID){
    this.dataService.getStates(countryID).toPromise().then(res => {
      console.log('Successful get request for states');
      this.states = res;
    }, errMsg => {
      console.log("Error in States Get Request")
    });
  }

  ngOnInit() {
    this.getCountryList();
  }
}
