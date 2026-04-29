import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentService } from '../services/student-service';

@Component({
  selector: 'app-list-student',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-student.html'
})
export class ListStudentComponent implements OnInit {

  students: any[] = [];

  constructor(private studentService: StudentService) {}

  ngOnInit() {
    this.students = this.studentService.getStudents();
  }
}