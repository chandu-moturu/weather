import { Component, Input, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Loc } from '../../interfaces/Loc';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent implements OnInit{
  lat: number = 0;
  long: number = 0;
  name:any[]=[];
  data: any | undefined;
  apiUrl: string = '';
  apiUrl1: string = '';
  responses:any[]=[];

  onClick() {
    this.getData();

  }

  constructor(private http: HttpClient) {
    
  }
  ngOnInit() {
    this.getData();
    this.getDataFromExternalObject();
    
  }

  getDataFromExternalObject() {
    for (let i = 0; i < Loc.length; i++) {
    
        this.name[i] = Loc[i].name;
        const lat = Loc[i].coordinates.lat;
        const long = Loc[i].coordinates.long;

        this.apiUrl1 = `https://api.agromonitoring.com/agro/1.0/weather?lat=${lat}&lon=${long}&appid=f8a1111da4b287d29fee5730bfe16ff9`;

        this.http.get(this.apiUrl1).subscribe((data) => {
          this.responses[i] = data;
          console.log(data,this.name[i]);
        });
      
    }
  }

  getData() {
    let lat = this.lat;
    let long = this.long;
    this.apiUrl = `https://api.agromonitoring.com/agro/1.0/weather?lat=${lat}&lon=${long}&appid=f8a1111da4b287d29fee5730bfe16ff9`;

    try {
      this.http.get(this.apiUrl).subscribe((data) => {
        this.data = data;
      });
    } catch (error) {
      console.log('Error in getData()', error);
    }
  }
}
