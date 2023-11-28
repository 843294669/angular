
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms'; 
import { ActivatedRoute } from '@angular/router';

// metadata defines the properties
@Component({
  selector: 'child',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterOutlet],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss'
})
export class ChildComponent {
  value: String = "";
  changeValue: String = "";
  onChange = () => {
    this.changeValue = this.value;
  }
  ngOnInit() {
    // query params
    // this.title = this.route.snapshot.queryParams["title"];
    // router path params
    // this.title = this.route.snapshot.params["title"];
    // query params
    this.route.queryParams.subscribe({
      next: (v) => {console.log(v['title']); this.value = v['title']},
      error: (e) => console.error(e),
      complete: () => console.info('complete')
    });
  }
  constructor(public route: ActivatedRoute) { }
}
