import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { last } from 'rxjs';
// import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':'application/json'
  })
}


@Injectable({
  providedIn: 'root'
})
export class ApiService {
 
  lat:number=0;
  long:number=0;
  private apiUrl='https://api.agromonitoring.com/agro/1.0/weather'
  private appId='&appid=f8a1111da4b287d29fee5730bfe16ff9'
  y='https://api.agromonitoring.com/agro/1.0/weather/forecast?lat=35&lon=139&appid='
 

  constructor(private http:HttpClient) { }
  
  getCurrentData(lat:number,long:number){
    const url=`${this.apiUrl}?lat=${lat}&lon=${long}${this.appId}`
    return this.http.get(url)
  }

  getForecastData(lat:number,long:number){
    const url=`${this.apiUrl}/forecast?lat=${lat}&lon=${long}${this.appId}`
    return this.http.get(url)
  }
}
