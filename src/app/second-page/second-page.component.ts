import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-second-page',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './second-page.component.html',
  styleUrl: './second-page.component.scss'
})
export class SecondPageComponent {

}
