import { Component , OnInit,Input, Output,EventEmitter} from '@angular/core';
// import { Poly } from 'src/app/interfaces/polygon';
import { faPencil } from '@fortawesome/free-solid-svg-icons';
import {faTimes} from '@fortawesome/free-solid-svg-icons'
import { DatePipe } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-poly-item',
  templateUrl: './poly-item.component.html',
  styleUrls: ['./poly-item.component.css']
})
export class PolyItemComponent implements OnInit{

  @Input() poly !: any;
  @Output() onDeletePoly:EventEmitter<any> = new EventEmitter();
  @Output() onUpdatePoly:EventEmitter<any> = new EventEmitter<any>();
  
  created:string=''
  faPencil=faPencil
  faTimes = faTimes
  name=''
  pencilClicked:boolean=false;
  pencilForm: FormGroup;
 
  
  constructor(private datePipe: DatePipe,private formBuilder: FormBuilder) {

      this.pencilForm = this.formBuilder.group({
        name: ['', Validators.required],
      });
 
  }

  formatDate() {
    const date = new Date(this.poly.created_at * 1000); // Convert Unix timestamp to Date object
    this.created = this.datePipe.transform(date, 'dd MMM yyyy') ?? '';
  }

  ngOnInit(): void {
    this.formatDate(); 
    this.pencilForm = new FormGroup({
      name: new FormControl(''), 
    });
  }


  onDelete(poly:any){
    this.onDeletePoly.emit(poly);
  }



  updateName() {
    this.pencilClicked=true
  }

  onUpdate(poly: any) {
    const nameControl = this.pencilForm.get('name');
    if (nameControl?.valid) {
      poly.name = nameControl.value;
      this.pencilClicked = false;
      this.onUpdatePoly.emit(poly);
    }
  }

}
