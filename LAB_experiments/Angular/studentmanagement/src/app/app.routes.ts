



import { Routes } from '@angular/router';
import { Home } from './Home/home';
import { AddStudent } from './add-student/add-student';
import { DisplayStudent } from './display-student/display-student';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'add', component: AddStudent },
  { path: 'display', component: DisplayStudent }
];