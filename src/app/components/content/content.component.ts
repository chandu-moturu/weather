import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
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
    this.getDataFromExternalObject();
  }

  constructor(private api:ApiService) {
    
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
        
        this.api.getCurrentData(lat,long).subscribe((data) => {
          this.responses[i] = data;
          console.log(data,this.name[i]);
        });
      
    }
  }

  getData() {
    let lat = this.lat;
    let long = this.long;
    try {
      this.api.getForecastData(lat,long).subscribe((data) => {
        this.data = data;
        console.log('forecast',data)
      });
      this.api.getCurrentData(lat,long).subscribe((data) => {
        this.data = data;
        console.log('current',data)
      });
    } catch (error) {
      console.log('Error in getData()', error);
    }
  }
}
