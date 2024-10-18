import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataService } from '../data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterOutlet,CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  title = 'app1';
  testClassAbout = new DataService()
  studentinAbout = this.testClassAbout.students

}
