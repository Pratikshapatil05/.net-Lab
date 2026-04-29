import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-admin',
  imports: [FormsModule,RouterOutlet],
  templateUrl: './admin.html',
  styleUrl: './admin.css',
})
export class Admin {
  name:string="Pratiksha Patil"
  age:number=21
  course:string="AIML"


  button_clicked (){
    alert("button_clicked");
  }


}
