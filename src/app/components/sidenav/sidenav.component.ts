import { Component } from '@angular/core';
// import list  from '../../images/list.png';


@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent {
  hover:boolean=false;

  onMouseEnter(){
     this.hover=true
  }
  onMouseLeave(){
    this.hover=false
  }
  

}
