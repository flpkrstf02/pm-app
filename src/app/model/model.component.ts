import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { HttpClientModule } from '@angular/common/http';
import { CanvasJS, CanvasJSAngularChartsModule, CanvasJSChart } from '@canvasjs/angular-charts';
import { ModelRequest } from '../models/ModelRequest';

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrl: './model.component.scss',
  imports: [CommonModule,
    MatIconModule,
    MatButtonModule,
    HttpClientModule,
    CanvasJSAngularChartsModule
  ],
  standalone:  true
})
export class ModelComponent {
  @Input() public activeModel!: string;

  public request: ModelRequest = {
    name: "",
    modelParams: [3.2,32]
  };
  
  public chartOptions!: CanvasJSChart;

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

  getPredictions() {
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
      data: []
    });

    this.data.postPrediction(this.request, this.activeModel).subscribe((response: Array<Array<number>>) => {
      response.forEach((data: Array<number>) => {
        const arrayOfObjects = data.map((number) => {
          return { y: number };
        });
        this.chartOptions.options.data.push({
          type: "line",
          showInLegend: true,
          name: "asd",
          dataPoints: arrayOfObjects
        })
        CanvasJS.Chart.prototype.render.call(this.chartOptions);
      })
    });
  }
}
