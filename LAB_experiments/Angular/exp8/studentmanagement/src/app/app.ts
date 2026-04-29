import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [FormsModule,CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('studentmanagement');
  // Interpolation
  studentName = 'Pratiksha';
  studentAge = 21;

  // Property Binding
  imageURL= 'https://images.unsplash.com/photo-1506744038136-46273834b3fb';

  // Two-way Binding
  newStudent = '';

  // Student List
  students: string[] = [];

  // Toggle List
  showStudents = true;

  // Toggle Div
  showDiv = true;

  addStudent() {
    if (this.newStudent.trim() !== '') {
      this.students.push(this.newStudent);
      this.newStudent = '';
    }
  }

  toggleStudents() {
    this.showStudents = !this.showStudents;
  }

  toggleDiv() {
    this.showDiv = !this.showDiv;
  }
}

