import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { HttpClientModule } from '@angular/common/http';
import { CanvasJS, CanvasJSAngularChartsModule, CanvasJSChart } from '@canvasjs/angular-charts';
import { ResponseAkos } from '../models/ResponseAkos';
import { RequestAkos } from '../models/RequestAkos';

@Component({
  selector: 'app-akos',
  standalone: true,
  imports: [CommonModule,
    MatIconModule,
    MatButtonModule,
    HttpClientModule,
    CanvasJSAngularChartsModule
  ],
  providers: [HttpClientModule],
  templateUrl: './akos.component.html',
  styleUrl: './akos.component.scss'
})

export class AkosComponent {
  public predictions!: ResponseAkos;
  public request: RequestAkos = {
    name: "",
    modelParams: [3.2,32]
  };
  
  chart: any;
  public chartOptions!: CanvasJSChart;

  public dummy1 = [
    {  y: 63.3 },
    {  y: 69 },
    {  y: 65 },
    {  y: 70 },
    {  y: 71 },
    {  y: 65 },
    {  y: 73 },
    {  y: 86 },
    {  y: 74 },
    {  y: 75 },
    {  y: 76 },
    {  y: 84 },
    {  y: 87 },
    {  y: 76 },
    {  y: 79 }
  ];
  public dummy2 = [
    {  y: 63.3 },
    {  y: 69 },
    {  y: 65 },
    {  y: 70 },
    {  y: 71 },
    {  y: 65 },
    {  y: 73 },
    {  y: 86 },
    {  y: 74 },
    {  y: 75 },
    {  y: 76 },
    {  y: 84 },
    {  y: 87 },
    {  y: 76 },
    {  y: 79 }
  ];
  public dummy3 = [
    {  y: 63.3 },
    {  y: 69 },
    {  y: 65 },
    {  y: 70 },
    {  y: 71 },
    {  y: 65 },
    {  y: 1 },
    {  y: 86 },
    {  y: 74 },
    {  y: 75 },
    {  y: 76 },
    {  y: 84 },
    {  y: 87 },
    {  y: 76 },
    {  y: 79 }
  ];
  public dummy4 = [
    {  y: 63.3 },
    {  y: 69 },
    {  y: 65 },
    {  y: 70 },
    {  y: 71 },
    {  y: 65 },
    {  y: 73 },
    {  y: 86 },
    {  y: 74 },
    {  y: 75 },
    {  y: 76 },
    {  y: 84 },
    {  y: 87 },
    {  y: 76 },
    {  y: 2 }
  ];

  constructor(private router: Router, private data: DataService) { }

  ngOnInit(){
    this.chartOptions = new CanvasJS.Chart("chartContainer", {
      animationEnabled: true,
      theme: "light2",
      title: {
        text: "Actual vs Projected Sales"
      },
      axisY: {
        title: "Number of Sales"
      },
      toolTip: {
        shared: true
      },
      legend: {
        cursor: "pointer",
        itemclick: function (e: any) {
          if (typeof (e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
            e.dataSeries.visible = false;
          } else {
            e.dataSeries.visible = true;
          }
          e.chart.render();
        }
      },
      data: [{
        type: "line",
        showInLegend: true,
        name: "Projected Sales",
        dataPoints: []
      }, {
        type: "line",
        showInLegend: true,
        name: "Actual Sales",
        dataPoints: []
      }]
    });
    CanvasJS.Chart.prototype.render.call(this.chartOptions);
  }

  getPredictions(): ResponseAkos {
    this.chartOptions = new CanvasJS.Chart("chartContainer", {
      animationEnabled: true,
      theme: "light2",
      title: {
        text: "Actual vs Projected Sales"
      },
      axisY: {
        title: "Number of Sales"
      },
      toolTip: {
        shared: true
      },
      legend: {
        cursor: "pointer",
        itemclick: function (e: any) {
          if (typeof (e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
            e.dataSeries.visible = false;
          } else {
            e.dataSeries.visible = true;
          }
          e.chart.render();
        }
      },
      data: [{
        type: "line",
        showInLegend: true,
        name: "Projected Sales",
        dataPoints: this.dummy1
      }, {
        type: "line",
        showInLegend: true,
        name: "Actual Sales",
        dataPoints: this.dummy2
      }]
    });

    this.data.postAkosPrediction(this.request).subscribe((response: ResponseAkos) => {
      response.predicted.forEach((data: Array<number>) => {
        this.chartOptions.options.data.push({
          type: "line",
          showInLegend: true,
          name: "asd",
          dataPoints: data
        })
      })
    });
    
    CanvasJS.Chart.prototype.render.call(this.chartOptions);

    return this.predictions;
  }

  navigate(path: string) {
    this.router.navigate([path]);
  }
}
