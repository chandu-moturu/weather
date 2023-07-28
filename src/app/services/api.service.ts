import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
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
 
  private apiUrl = 'https://api.agromonitoring.com/agro/1.0/weather?lat=35&lon=139&appid=f8a1111da4b287d29fee5730bfe16ff9'

  constructor(private http:HttpClient) { }

  getData(){
    return this.http.get(this.apiUrl)
  }
}
