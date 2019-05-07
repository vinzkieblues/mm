import { Component, OnInit } from '@angular/core';
import { COURSES } from '../data/data';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  courses = COURSES;
e
  constructor() { }
  
  ngOnInit() {
  
  }

}
