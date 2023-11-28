
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms'; 

// metadata defines the properties
@Component({
  selector: 'child',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterOutlet],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss'
})
export class DemoComponent {
  value: String = "jacob";
  changeValue: String = "";
  onChange = () => {
    this.changeValue = this.value;
  }
}
