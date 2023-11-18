import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private route = inject(Router); 
  title = 'cypressPOC995555';
  constructor() {}

  navigateToSecondPage() {
      console.log('here');
      this.route.navigate(['/secondPage']);
  }
}
