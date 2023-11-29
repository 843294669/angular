import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// metadata defines the properties
@Component({
  selector: 'parent',
  standalone: false,
  // imports: [CommonModule, ChildComponent, RouterOutlet],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss'
})

export class ParentComponent {

  constructor(public route: ActivatedRoute) { }

  title: String = '';

  // 构造函数中实例化
  ngOnInit() {
    // query params
    // this.title = this.route.snapshot.queryParams["title"];
    // router path params
    // this.title = this.route.snapshot.params["title"];
    // router path params
    this.route.params.subscribe({
      next: (v) => {
        this.title = v['title'];
      },
      error: (e) => console.error(e),
      complete: () => console.info('complete')
    });
  }

  receiveChild(title: String) {
    this.title = title;
  }

}
