import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-first-page',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './first-page.component.html',
  styleUrl: './first-page.component.scss'
})
export class FirstPageComponent {
  currentDate: Date = new Date();
  private route = inject(Router);  

  startClock() {
    setInterval(() => {
      this.currentDate = new Date();
    }, 1000);
  }

  navigateToSecondPage() {
    this.route.navigateByUrl('/second-page');
  }
}
