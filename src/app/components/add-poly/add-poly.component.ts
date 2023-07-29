import { Component,OnInit,Output,EventEmitter,ViewChild } from '@angular/core';
import { Poly } from 'src/app/interfaces/polygon';
import { PolyList } from 'src/app/interfaces/polylist';
import { DatePipe } from '@angular/common';
import { PolygonService } from 'src/app/services/polygon.service';



@Component({
  selector: 'app-add-poly',
  templateUrl: './add-poly.component.html',
  styleUrls: ['./add-poly.component.css']
})
export class AddPolyComponent implements OnInit{

  @Output() onAddPoly: EventEmitter<Poly> = new EventEmitter()


  polygons: PolyList[] = [];
  polys:Poly[]=[];
  name:string='';
  created:string='';
  myDate:Date=new Date();
  area:number=0;
  

  @ViewChild('Name') inputName:any;


  constructor(private datePipe: DatePipe,private polyService:PolygonService){
    this.myDate = new Date()
    }
  ngOnInit(): void {
    this.polyService.getPolys().subscribe((polys)=>(this.polys=polys));
  }

  onSubmit(){
    if(!this.name){
      alert("please add name")
      return;
    }

    console.log('clicked')
    let formDate = this.datePipe.transform(this.myDate, 'dd MMM yyyy')??'';
    console.log(formDate)
    console.log(typeof formDate)
    const newPoly = {
      polygon : this.polygons,
      name : this.name,
      created: formDate,
      area : this.area
    }

    this.onAddPoly.emit(newPoly);
    this.addPoly(newPoly)
    

    this.name=''
    this.polygons=[]
    this.created= '';
    this.area=0
  }
  
  addPoly(poly:Poly){
    this.polyService.addPoly(poly).subscribe((poly)=>this.polys.push(poly));
  }

  clearInput(){
    this.inputName.nativeElement.value = ' ';
  }

}
