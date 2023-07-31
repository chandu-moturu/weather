import { Component, OnInit, Output ,EventEmitter} from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import * as MapboxDraw from '@mapbox/mapbox-gl-draw';
// import { area } from '@turf/turf';
// import { polygonData } from 'src/app/interfaces/polyData';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent implements OnInit {
  map!: mapboxgl.Map;
  style = 'mapbox://styles/mapbox/satellite-streets-v12';
  lng = 20;
  lat = 77;

  @Output() addDraw: EventEmitter<any> = new EventEmitter()

  polygonData:any = {
    type: 'FeatureCollection',
    features: [],
  };

  ngOnInit(): void {
    (mapboxgl as typeof mapboxgl).accessToken =
      'pk.eyJ1IjoicGJzbWFwYm94OTk5IiwiYSI6ImNsa2toYnF3dzBrNzEzZW42aTZhdmFoN2wifQ.mlwOREd2seDaaRGyxP-FyA';

    this.map = new mapboxgl.Map({
      container: 'map',
      style: this.style,
      center: [this.lat, this.lng],
      zoom: 3,
    });
    this.map.addControl(new mapboxgl.NavigationControl());
    this.map.addControl(this.draw);

    this.map.on('draw.create', (event:any) => {
      this.handleDraw(event)
     
    });

    this.map.on('style.load', () => {
      this.map.setFog({
        color: 'rgb(220, 159, 159)',
        'high-color': 'rgb(36, 92, 223)',
        'horizon-blend': 0.4,
      });

      this.map.addSource('mapbox-dem', {
        type: 'raster-dem',
        url: 'mapbox://mapbox.terrain-rgb',
      });

      this.map.setTerrain({
        source: 'mapbox-dem',
        exaggeration: 1.5,
      });
    });
    console.log(this.polygonData);
  }

  draw = new MapboxDraw({
    userProperties: true,
    displayControlsDefault: false,
    controls: {
      polygon: true,
      trash: true,
    },
    // defaultMode: 'draw_polygon',
  });

  handleDraw(event: any) {
    this.polygonData.features.push(event.features[event.features.length - 1]);
    // console.log('der',this.polygonData);
    this.addDraw.emit(this.polygonData)
    this.calculateArea()
  }
  calculateArea(){
    const data = this.draw.getAll()
    console.log('draw data',data)
    console.log('heelo')

    if(data.features.length>0){
      // const area = turf.area(data);
    }
  }
}
