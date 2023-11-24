import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-akos',
  standalone: true,
  imports: [CommonModule,
            MatIconModule,
            MatButtonModule,
            HttpClientModule],
  providers: [HttpClientModule],
  templateUrl: './akos.component.html',
  styleUrl: './akos.component.scss'
})

export class AkosComponent {
  public predictions!: any[];

  constructor(private router: Router, private data: DataService) { }

  getPredictions(): Number[] {
    this.data.getAkosPrediction().subscribe((response: any[]) => {
      this.predictions = response;
    });
    console.log(this.predictions)
    return this.predictions;
  }

  navigate(path: string) {
    this.router.navigate([path]);
  }
}
