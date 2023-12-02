import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';
import { ModelComponent } from '../model/model.component';

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
  public activeModel: string = '';

  constructor(private router: Router) { }

  // navigate(path: string) {
  //   this.showNavButtons = false;
  //   //this.router.navigate([path]);
  // }

  showHomePage(){
    this.showNavButtons = true;
  }

  showComponent(model: string){
    this.showNavButtons = false;

    this.activeModel = model;
  }
}
