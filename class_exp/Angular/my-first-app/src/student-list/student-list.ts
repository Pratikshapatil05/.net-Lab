import { Component } from '@angular/core';
import { Studentservice } from '../servises/studentservice';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-student-list',
  imports: [CommonModule],
templateUrl: './student-list.html',
  styleUrl: './student-list.css',
})
export class StudentList {
  students :any[]=[];//any[] means it can stores any type of data ,later this can hold student data from the servises

/**
 *
 */
constructor( private Studentservice:Studentservice) {}

 ngOnInit (){
  this.students=this.Studentservice.getStudents();
  console.log(this.students);

 }
 
  
}

