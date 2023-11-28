import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
import { ChildComponent } from '../child/child.component';

// metadata defines the properties
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ChildComponent, RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss'
})
export class ParentComponent {
}
