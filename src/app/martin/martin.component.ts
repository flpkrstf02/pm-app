import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-martin',
  standalone: true,
  imports: [CommonModule,
            MatIconModule,
            MatButtonModule,],
  templateUrl: './martin.component.html',
  styleUrl: './martin.component.scss'
})
export class MartinComponent {
  constructor(private router: Router) { }

  navigate(path: string) {
    this.router.navigate([path]);
  }
}
