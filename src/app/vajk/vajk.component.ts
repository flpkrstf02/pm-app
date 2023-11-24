import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vajk',
  standalone: true,
  imports: [CommonModule,
            MatIconModule,
            MatButtonModule],
  templateUrl: './vajk.component.html',
  styleUrl: './vajk.component.scss'
})
export class VajkComponent {
  constructor(private router: Router) { }

  navigate(path: string) {
    this.router.navigate([path]);
  }
}
