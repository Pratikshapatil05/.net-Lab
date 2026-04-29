import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Studentservice {
  students=[
    {name:'Pratiksha', age :22,course:'CSE'},
     {name:'Pooja', age :22,course:'AIML'},
     {name:'Priyanka', age :22,course:'CSE'}
     
  ];

  getStudents(){
    return this.students;
  }
}
