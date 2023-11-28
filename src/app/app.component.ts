import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';

// metadata defines the properties
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ParentComponent, ChildComponent, RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'Angular';
}
