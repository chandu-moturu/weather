import { Component, OnInit ,AfterViewInit ,ElementRef, ViewChild  } from '@angular/core';
import { Chart } from 'chart.js/auto'; 

@Component({
  selector: 'app-temp-graph',
  templateUrl: './temp-graph.component.html',
  styleUrls: ['./temp-graph.component.css']
})
export class TempGraphComponent implements OnInit, AfterViewInit {
  @ViewChild('graph') weatherChartRef!: ElementRef<HTMLCanvasElement>;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    const ctx: CanvasRenderingContext2D | null = this.weatherChartRef.nativeElement.getContext('2d');

    if (!ctx) {
      console.error("Canvas context is null. Unable to initialize the chart.");
      return;
    }

    new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['1:00', '2:00', '3:00', '4:00', '5:00', '6:00', '7:00', '8:00', '9:00'],
        datasets: [
          {
            label: 'Temperature (#Vizag)',
            data: [20, 21, 22, 23, 24, 25, 26, 27, 28],
            borderColor: 'rgba(255, 99, 132, 1)',
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderWidth: 1,
            fill: true
          },
          {
            label: 'Temperature (#Kakinada)',
            data: [22, 23, 24, 25, 26, 27, 28, 29, 30],
            borderColor: 'rgba(54, 162, 235, 1)',
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderWidth: 1,
            fill: true
          },
          {
            label: 'Temperature (#Hyderabad)',
            data: [26, 27, 28, 29, 30, 31, 32, 33, 34],
            borderColor: 'rgba(75, 192, 192, 1)',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderWidth: 1,
            fill: true
          }
        ]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      },
      plugins: [{
        id: 'customLabels', 
        beforeDraw: function(chart: any) {
          const labels = ['Label 1', 'Label 2', 'Label 3', 'Label 4', 'Label 5', 'Label 6', 'Label 7', 'Label 8', 'Label 9'];
          const position = 'top'; 
          if (position === 'top') {
            const firstDataPoint = chart.data.datasets[0].data[0].x;
            const lastDataPoint = chart.data.datasets[0].data[chart.data.datasets[0].data.length - 1].x;
            const xScale = chart.scales.x;

            for (let i = 0; i < labels.length; i++) {
              const x = xScale.getPixelForValue(firstDataPoint + ((lastDataPoint - firstDataPoint) * i / (labels.length - 1)));
              const y = chart.chartArea.top;
              const ctx = chart.ctx;
              ctx.save();
              ctx.translate(x, y);
              ctx.rotate(-Math.PI / 2);
              ctx.textAlign = 'center';
              ctx.textBaseline = 'middle';
              ctx.fillText(labels[i], 0, 0);
              ctx.restore();
            }
          }
        }
      }]
    });
  }
}
