import { Component, OnInit } from '@angular/core';
import { PolygonService } from 'src/app/services/polygon.service';
import { faStar } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-polygons',
  templateUrl: './polygons.component.html',
  styleUrls: ['./polygons.component.css']
})

export class PolygonsComponent implements OnInit{
  polys:any[]=[];
  searchText='';
  star=faStar
  constructor(private polyService:PolygonService){}

  ngOnInit(): any {
      this.polyService.getPolys().subscribe((polys:any)=>(this.polys=polys));
  }

  // addPoly(poly:Poly){
  //   this.polyService.addPoly(poly).subscribe((poly)=>this.polys.push(poly));
  // }

  deletePoly(poly:any){
    this.polyService.deletePoly(poly).subscribe(()=>(this.polys = this.polys.filter((p)=>p.id !== poly.id)));
  }

  updatePoly(poly:any){
    this.polyService.updatePoly(poly).subscribe(()=>(this.polys.findIndex((p)=>p.id === poly.id)))
  }

}
