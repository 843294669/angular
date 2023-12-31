import { Component, Input, Output, EventEmitter} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppService } from '../app.service';

// metadata defines the properties
@Component({
  selector: 'child',
  standalone: false,
  // imports: [CommonModule, FormsModule, RouterOutlet],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss'
})

export class ChildComponent {
  
  constructor(private route: ActivatedRoute, private service: AppService) {
    service.getData().subscribe(resp => this.data = resp.name + "," + resp.age);
    // service.getData().subscribe(resp => this.JsonData = JSON.parse(JSON.stringify(resp)));
  }
  // 接收父组件传值
  @Input() title: String = '';
  @Output() emitter = new EventEmitter<String>();
  
  value: String = "";
  changeValue: String = "";
  data: any;

  onChange = () => {
    this.changeValue = this.value;
    // 向父组件传值
    this.emitter.emit(this.value);
  }
  ngOnInit() {
    // query params
    // this.title = this.route.snapshot.queryParams["title"];
    // router path params
    // this.title = this.route.snapshot.params["title"];
    // query params
    this.route.queryParams.subscribe({
      next: (v) => {
        this.value = v['title'] || this.title;
      },
      error: (e) => console.error(e),
      complete: () => console.info('complete')
    });
  }

}
