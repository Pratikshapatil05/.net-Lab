import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-student-directives',
  imports: [CommonModule],
  templateUrl: './student-directives.html',
  styleUrl: './student-directives.css',
})
export class StudentDirectives {
  showDiv = true;

  colorType = 'blue';

  toggleDiv() {
    this.showDiv = !this.showDiv;
  }

  changeColor(color: string) {
    this.colorType = color;
  }
}
