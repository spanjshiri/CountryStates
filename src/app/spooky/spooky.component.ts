import { Component, OnInit, Injectable, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormControl } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { DataService } from '../data.service';
import { Country } from '../country.model';

@Component({
  selector: 'app-spooky',
  templateUrl: './spooky.component.html',
  styleUrls: ['./spooky.component.css'],
  providers: [DataService]
})
export class SpookyComponent implements OnInit{

  constructor(private fb: FormBuilder, private http: HttpClient, private dataService: DataService) {
  }

  ngOnInit() {
  }
}
