import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Poly } from '../interfaces/polygon';


const httpOptions={
  headers: new HttpHeaders({
    'Content-Type':'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class PolygonService {

  private apiUrl = 'http://localhost:5000/polygons'

  constructor(private http:HttpClient) { }

  getPolys(): Observable<Poly[]>{
    return this.http.get<Poly[]>(this.apiUrl)
  }

  addPoly(poly: Poly): Observable<Poly>{
    return this.http.post<Poly>(this.apiUrl,poly,httpOptions)
  }

  deletePoly(poly:Poly): Observable<Poly>{
    const url = `${this.apiUrl}/${poly.id}`
    return this.http.delete<Poly>(url);
  }

  updatePoly(poly:Poly): Observable<Poly>{
    const url = `${this.apiUrl}/${poly.id}`;
    return this.http.put<Poly>(url,poly,httpOptions);
  }
}

