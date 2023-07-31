import { Component , OnInit,Input, Output,EventEmitter} from '@angular/core';
// import { Poly } from 'src/app/interfaces/polygon';
import {faTimes} from '@fortawesome/free-solid-svg-icons'
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-poly-item',
  templateUrl: './poly-item.component.html',
  styleUrls: ['./poly-item.component.css']
})
export class PolyItemComponent implements OnInit{

  @Input() poly !: any;
  @Output() onDeletePoly:EventEmitter<any> = new EventEmitter();
  
  created:string=''

  faTimes = faTimes
  constructor(private datePipe: DatePipe) {
  
  }

  formatDate() {
    const date = new Date(this.poly.created_at * 1000); // Convert Unix timestamp to Date object
    this.created = this.datePipe.transform(date, 'dd MMM yyyy') ?? '';
  }

  ngOnInit(): void {
    this.formatDate(); 
  }


  onDelete(poly:any){
    this.onDeletePoly.emit(poly);
  }

}
