import { Component,OnInit,Output,EventEmitter } from '@angular/core';
import { Poly } from 'src/app/interfaces/polygon';
import { PolyList } from 'src/app/interfaces/polylist';
import { DatePipe } from '@angular/common';



@Component({
  selector: 'app-add-poly',
  templateUrl: './add-poly.component.html',
  styleUrls: ['./add-poly.component.css']
})
export class AddPolyComponent implements OnInit{

  @Output() onAddPoly: EventEmitter<Poly> = new EventEmitter()


  polygons: PolyList[] = [];
  name:string='';
  created:string='';
  myDate:Date=new Date();
  area:number=0;




  constructor(private datePipe: DatePipe){
    this.myDate = new Date()
    }
  ngOnInit(): void {
    
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
    

    this.name=''
    this.polygons=[]
    this.created= '';
    this.area=0
  }
  



}
