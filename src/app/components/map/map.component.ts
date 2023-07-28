import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import * as MapboxDraw from '@mapbox/mapbox-gl-draw';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css',],
})
export class MapComponent implements OnInit {
  map!: mapboxgl.Map;
  style = 'mapbox://styles/mapbox/satellite-streets-v12';
  lat = 37.75;
  lng = 40.41;

  ngOnInit(): void {
    (mapboxgl as typeof mapboxgl).accessToken =
      'pk.eyJ1IjoicGJzbWFwYm94OTk5IiwiYSI6ImNsa2toYnF3dzBrNzEzZW42aTZhdmFoN2wifQ.mlwOREd2seDaaRGyxP-FyA';

    this.map = new mapboxgl.Map({
      container: 'map', // container ID
      style: this.style, // style URL
      center: [this.lat, this.lng], // starting position [lng, lat]
      zoom: 8, // starting zoom
    });
    this.map.addControl(new mapboxgl.NavigationControl());
    this.map.addControl(this.draw,);

    this.map.on('style.load', () => {
      // Custom atmosphere styling
      this.map.setFog({
      'color': 'rgb(220, 159, 159)', // Pink fog / lower atmosphere
      'high-color': 'rgb(36, 92, 223)', // Blue sky / upper atmosphere
      'horizon-blend': 0.4 // Exaggerate atmosphere (default is .1)
      });
       
      this.map.addSource('mapbox-dem', {
      'type': 'raster-dem',
      'url': 'mapbox://mapbox.terrain-rgb'
      });
       
      this.map.setTerrain({
      'source': 'mapbox-dem',
      'exaggeration': 1.5
      });
      });
  }

  draw = new MapboxDraw({
    
    userProperties: true,
    displayControlsDefault: false,
    controls: {
      polygon: true,
      trash: true,
    },
    defaultMode: 'draw_polygon',
  });
}
