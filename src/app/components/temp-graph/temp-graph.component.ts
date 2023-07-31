import { Component } from '@angular/core';
import { ChartType } from 'chart.js'; // Import ChartType

@Component({
  selector: 'app-temp-graph',
  templateUrl: './temp-graph.component.html',
  styleUrls: ['./temp-graph.component.css']
})
export class TempGraphComponent {
  public lineChartData: any[] = [
    { data: [65, 65, 80, 81, 56, 55, 40], label: 'A' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'B' },

  ];
  public lineChartLabels: string[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChartOptions: any = {
    responsive: true
  };
  
  public lineChartLegend = true;
  public lineChartType:ChartType = 'line';

  ngOnInit(): void {
    
  }

  public chartHovered(e: any): void { }
  public chartClicked(e: any): void { }
}
