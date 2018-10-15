import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Country } from './models/country.model';
import { State } from './models/state.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class DataService {
    // countryUrl =  "https://xc-ajax-demo.herokuapp.com/api/countries/";
    countryUrl =  'http://localhost:8000/api/countries/';

    constructor(private http: HttpClient) {}

    postCountry(code, name) {

        // console.log(code);
        // console.log(name);
        const httpOptions = {headers: new HttpHeaders({'Content-Type':  'application/json'})};
        const INFO = Object.assign(code, name);
        const body = JSON.stringify(INFO);
        // console.log(body);
        // console.log(this.countryUrl);
        return this.http.post(this.countryUrl, body, httpOptions);
    }

    postState(state, countryCode) {
        const httpOptions = {headers: new HttpHeaders({'Content-Type':  'application/json'})};
        // const INFO = Object.assign(state, countryCode);
        // state.CountryCode = countryCode;
        const body = JSON.stringify(state);
        const stateUrl = this.countryUrl + countryCode + '/states/';
        console.log('stateurl: ' + stateUrl);
        return this.http.post(stateUrl, body, httpOptions);
    }

    getCountries() {
        return this.http.get<Country[]>(this.countryUrl);
    }

    getStates(countryCode) {
        const stateUrl = this.countryUrl + countryCode + '/states';
        return this.http.get<State[]>(stateUrl);
    }
}
