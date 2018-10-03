import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Country } from './models/country.model';
import { State } from './models/state.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class DataService {
    countryUrl =  "https://xc-ajax-demo.herokuapp.com/api/countries/";

    constructor(private http: HttpClient) {}

    postCountry(code, name) {

        //console.log(code);
        //console.log(name);
        const httpOptions = {headers: new HttpHeaders({'Content-Type':  'application/json'})};
        let INFO = Object.assign(code, name);
        let body = JSON.stringify(INFO);
        //console.log(body);
        //console.log(this.countryUrl);
        return this.http.post(this.countryUrl, body, httpOptions);
    }

    postState(stateCode, stateName, countryCode) {
        const httpOptions = {headers: new HttpHeaders({'Content-Type':  'application/json'})};
        let INFO = Object.assign(stateCode, stateName, countryCode);
        let body = JSON.stringify(INFO);
        let stateUrl = this.countryUrl + countryCode.countryCode + "/states/";
        /*console.log("The state code is: " + stateCode);
        console.log("The state name is: " + stateName);
        console.log("The country code for this state is: " + countryCode);
        console.log('The new url to post to is: ' + stateUrl);*/
        return this.http.post(stateUrl, body, httpOptions);
    }

    getCountries(){
        return this.http.get<Country[]>(this.countryUrl);
    };

    getStates(countryCode){
        let stateUrl = this.countryUrl + countryCode + "/states";
        return this.http.get<State[]>(stateUrl);
    };
}