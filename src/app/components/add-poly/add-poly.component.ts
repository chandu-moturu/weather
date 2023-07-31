import { Component,OnInit,Output,EventEmitter,ViewChild } from '@angular/core';


import { PolygonService } from 'src/app/services/polygon.service';



@Component({
  selector: 'app-add-poly',
  templateUrl: './add-poly.component.html',
  styleUrls: ['./add-poly.component.css']
})
export class AddPolyComponent implements OnInit{

  @Output() onAddPoly: EventEmitter<any> = new EventEmitter()

  
  coordinates:any=[]
  coordinatesList:any=[]
  
  polys:any[]=[];
  name:string='';
  area:number=0;
  

  @ViewChild('Name') inputName:any;


  constructor(private polyService:PolygonService){
   
    }
  ngOnInit(): void {
    this.polyService.getPolys().subscribe((polys:any)=>(this.polys=polys));
  }

  onSubmit(){
    if(!this.name){
      alert("please add name")
      return;
    }
    if(this.coordinates.length<1){
      alert("please draw polygon")
      return
    }

   
  
    const newPoly = {
      name:this.name,
      geo_json:{
         type:'Feature',
         properties:{
   
         },
         geometry:{
            type:'Polygon',
            coordinates:[
              [
                 [-121.1958,37.6683],
                 [-121.1779,37.6687],
                 [-121.1773,37.6792],
                 [-121.1958,37.6792],
                 [-121.1958,37.6683]
              ]
           ]
         }
      }
   }
   try{

    this.onAddPoly.emit(newPoly);
    this.addPoly(newPoly)
    console.log('added')
   }
   catch{
    console.log('error')
   }
   
    

    this.name=''
    this.area=0
  }
  
  addPoly(poly:any){
    this.polyService.addPoly(poly).subscribe((poly)=>this.polys.push(poly));
  }

  clearInput(){
    this.inputName.nativeElement.value = ' ';
  }

  draw(event:any){
    this.coordinates=event
    console.log("parent",this.coordinates)
    console.log("parent coordinates",this.coordinates.features[0].geometry.coordinates[0])
    this.coordinatesList =this.coordinates.features[0].geometry.coordinates[0]
 
  }

}
