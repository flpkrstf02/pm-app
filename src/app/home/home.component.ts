import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';
import { ModelComponent } from '../model/model.component';
import { ModelType } from '../models/modelType.enum';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,
    MatIconModule,
    MatButtonModule,
    HttpClientModule,
    CanvasJSAngularChartsModule,
    ModelComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  public showNavButtons: boolean = true;
  public activeModel!: ModelType;

  public readonly modelType: typeof ModelType = ModelType;

  constructor() { }

  showHomePage() {
    this.showNavButtons = true;
  }

  showComponent(model: ModelType) {
    this.showNavButtons = false;
    this.activeModel = model;
  }
}
