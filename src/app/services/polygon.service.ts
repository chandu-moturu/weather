import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';



const httpOptions={
  headers: new HttpHeaders({
    'Content-Type':'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class PolygonService {

  private appId='?appid=2cc5982076e62be50aaa62feeffb60f9'
  private apiUrl = 'http://localhost:5000/polygons'
  private apiUrl2='http://api.agromonitoring.com/agro/1.0/polygons'

  constructor(private http:HttpClient) { 
    this.getPolys()
  }

  getPolys(): any{
    const url=`${this.apiUrl2}${this.appId}&duplicated=true`
    return this.http.get<any[]>(url)
  }

  addPoly(poly: any){
    const url=`${this.apiUrl2}${this.appId}&duplicated=true`
    return this.http.post<any>(url,poly,httpOptions)
  }

  deletePoly(poly:any){
    const url = `${this.apiUrl2}/${poly.id}${this.appId}&duplicated=true`
    return this.http.delete<any>(url);
  }

  updatePoly(poly:any){
    const url = `${this.apiUrl2}/${poly.id}${this.appId}&duplicated=true`;
    return this.http.put(url,poly,httpOptions);
  }
}

