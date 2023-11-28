import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { DemoComponent } from '../child/child.component';

// metadata defines the properties
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, DemoComponent, RouterOutlet],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss'
})
export class AppComponent {
  title = 'Angular';
}
