import { Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { ListStudentComponent } from '../list-student/list-student.component';
import { AddStudentComponent } from '../add-student/add-student.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'list-student', component: ListStudentComponent },
  { path: 'add-student', component: AddStudentComponent },
  { path: '', component: ListStudentComponent }
];