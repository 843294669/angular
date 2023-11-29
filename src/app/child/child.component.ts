import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// metadata defines the properties
@Component({
  selector: 'child',
  standalone: false,
  // imports: [CommonModule, FormsModule, RouterOutlet],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss'
})

export class ChildComponent {
  
  constructor(private route: ActivatedRoute) { }

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

}
