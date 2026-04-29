import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  students = [
    { name: 'Priyanka', age: 21, course: 'AIML' },
    { name: 'Pratiksha', age: 20, course: 'AIML' },
    { name: 'Anuja', age: 22, course: 'AIML' }
  ];

  getStudents() {
    return this.students;
  }
}