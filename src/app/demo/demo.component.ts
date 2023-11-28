
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms'; 

// metadata defines the properties
@Component({
  selector: 'demo',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterOutlet],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.scss'
})
export class DemoComponent {
  value: String = "jacob";
  changeValue: String = "";
  onChange = () => {
    this.changeValue = this.value;
  }
}
