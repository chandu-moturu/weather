import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms'
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { FooterComponent } from './components/footer/footer.component';
import { ButtonComponent } from './components/button/button.component';
import { ContentComponent } from './components/content/content.component';
import { MiniNavComponent } from './components/mini-nav/mini-nav.component';
import { GraphComponent } from './components/graph/graph.component';
import { MapComponent } from './components/map/map.component';
import { PolygonsComponent } from './components/polygons/polygons.component';
import { PolyItemComponent } from './components/poly-item/poly-item.component';
import { AddPolyComponent } from './components/add-poly/add-poly.component';
import { SearchPipe } from './pipes/search.pipe';
import { DatePipe } from '@angular/common';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidenavComponent,
    FooterComponent,
    ButtonComponent,
    ContentComponent,
    MiniNavComponent,
    GraphComponent,
    MapComponent,
    PolygonsComponent,
    PolyItemComponent,
    AddPolyComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
