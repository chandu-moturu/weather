import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
import { ContentComponent } from '../content/content.component';


@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit{

  

  ngOnInit(): void {
    const ctx = document.getElementById('myChart');

    new Chart("myChart", {
      type: 'line',
      data: {
        labels: ['Clouds',	'Humidity',	'Pressure',	'Temperature',	'Wind Speed'],
        datasets: [{
          label: '#Vizag',
          data: [12, 19, 3, 5, 2, 3],
          borderWidth: 1
        },{
          label: '#Kakinada',
          data: [1, 9, 13, 15, 21, 13],
          borderWidth: 1
      
        },{
          label: '#Hyderabad',
          data: [13, 15, 21, 13, 1],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
  

}
