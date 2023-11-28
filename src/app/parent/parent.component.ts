import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ChildComponent } from '../child/child.component';

// metadata defines the properties
@Component({
  selector: 'parent',
  standalone: true,
  imports: [CommonModule, ChildComponent, RouterOutlet],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss'
})
// 构造函数中实例化

export class ParentComponent {
  title: String = '';
  ngOnInit() {
    // query params
    // this.title = this.route.snapshot.queryParams["title"];
    // router path params
    // this.title = this.route.snapshot.params["title"];
    // router path params
    this.route.params.subscribe({
      next: (v) => {console.log(v['title']); this.title = v['title']},
      error: (e) => console.error(e),
      complete: () => console.info('complete')
    });
  }
  constructor(public route: ActivatedRoute) { }
}
