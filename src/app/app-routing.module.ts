import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { GraphComponent } from './components/graph/graph.component';
import { PolygonsComponent } from './components/polygons/polygons.component';
import { ContentComponent } from './components/content/content.component';
import { AddPolyComponent } from './components/add-poly/add-poly.component';
import { TempGraphComponent } from './components/temp-graph/temp-graph.component';

const routes: Routes = [
  {path:'',component:PolygonsComponent},
  {path:'graph',component: GraphComponent},
  {path:'add-polygon',component: AddPolyComponent},
  {path:'private',component:ContentComponent},
  {path:'temp-graph',component:TempGraphComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
