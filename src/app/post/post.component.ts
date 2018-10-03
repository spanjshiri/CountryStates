import { Component, OnInit, Injectable, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormControl } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { DataService } from '../data.service';
import { Country } from '../models/country.model';
import { State } from '../models/state.model';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  providers: [DataService]
})
export class PostComponent implements OnInit{

  constructor(private fb: FormBuilder, private http: HttpClient, private dataService: DataService) {
  }

  addCountry(code, name){
    let CountryCode  = { code : code };
    let CountryName = { name: name };
    console.log(code);
    console.log(name);
    var AppComponent = this;
    var apiPromise = AppComponent.dataService.postCountry(CountryCode, CountryName).toPromise();
    apiPromise.then(function (response: Response) {
      console.log('You have added a new country successfully!');
      window.alert('You have successfully a country!');
    }, (errMsg: Error) => {
      console.log('There was an error adding the new country: ' + errMsg);
      window.alert('An error has occured in adding a country');
    });
  }

  addState(stateCode, stateName, countryCode){
    let CountryCode  = { countryCode : countryCode };
    let StateCode  = { code : stateCode };
    let StateName = { name: stateName };
    var AppComponent = this;
    var apiPromise = AppComponent.dataService.postState(StateCode, StateName, CountryCode).toPromise();
    apiPromise.then(res => {
      window.alert('You have successfully a state!');
      console.log('You have added a new state successfully!');
    }, errMsg => {
      console.log('There was an error adding the new state: ' + errMsg);
      window.alert('An error has occured in adding a state');
    });
  }

  ngOnInit() {
  }
}
