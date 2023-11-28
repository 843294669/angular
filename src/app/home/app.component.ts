import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { DemoComponent } from '../demo/demo.component';

// metadata defines the properties
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, DemoComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Angular';
}
