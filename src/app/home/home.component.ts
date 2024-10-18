import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet, FormsModule,CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']  // Corrected to 'styleUrls'
})
export class HomeComponent {
  title = 'app1';
  
  // Removed the incomplete 'testClass = new'

  names : string[] = ["ali", "ahmed" , "hana"]
  student: { name: string; id: number; age: number } = {
    name: 'ali',
    id: 5100,
    age: 21,
  };
  testClass = new DataService()
 
  sstudents :any[] =  this.testClass.students
  test() {
    alert('hello');
  }

  check: boolean = true;

  changeBackground() {
    this.check = !this.check; // More concise toggle logic
  }
}
