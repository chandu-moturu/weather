import { Component , OnInit,Input, Output,EventEmitter} from '@angular/core';
import { Poly } from 'src/app/interfaces/polygon';
import {faTimes} from '@fortawesome/free-solid-svg-icons'
@Component({
  selector: 'app-poly-item',
  templateUrl: './poly-item.component.html',
  styleUrls: ['./poly-item.component.css']
})
export class PolyItemComponent implements OnInit{

  @Input() poly !: Poly;
  @Output() onDeletePoly:EventEmitter<Poly> = new EventEmitter();
  

  faTimes = faTimes
  constructor(){}

  ngOnInit(): void {
      
  }

  onDelete(poly:Poly){
    this.onDeletePoly.emit(poly);
  }

}
