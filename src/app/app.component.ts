import { Component } from '@angular/core';

// metadata defines the properties
@Component({
  selector: 'app-root',
  standalone: false,
  //imports: [ParentComponent, ChildComponent, RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = '';
  ngOnInit() {
    this.title = 'Angular';
  }
}
