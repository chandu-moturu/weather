import { Component, OnInit } from '@angular/core';
import { PolygonService } from 'src/app/services/polygon.service';
import { Poly } from 'src/app/interfaces/polygon';

@Component({
  selector: 'app-polygons',
  templateUrl: './polygons.component.html',
  styleUrls: ['./polygons.component.css']
})

export class PolygonsComponent implements OnInit{
  polys:Poly[]=[];
  searchText='';
  
  constructor(private polyService:PolygonService){}

  ngOnInit(): void {
      this.polyService.getPolys().subscribe((polys)=>(this.polys=polys));
  }

  addPoly(poly:Poly){
    this.polyService.addPoly(poly).subscribe((poly)=>this.polys.push(poly));
  }

  deletePoly(poly:Poly){
    this.polyService.deletePoly(poly).subscribe(()=>(this.polys = this.polys.filter((p)=>p.id !== poly.id)));
  }

}
