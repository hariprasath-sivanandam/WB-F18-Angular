import { Component, OnInit } from '@angular/core';
import {CourseServiceClient} from '../services/course.service.client';

@Component({
  selector: 'app-course-grid',
  templateUrl: './course-grid.component.html',
  styleUrls: ['./course-grid.component.css']
})
export class CourseGridComponent implements OnInit {

  constructor(private courseService: CourseServiceClient) { }
  courses = [];

  ngOnInit() {
    this.courses = this.courseService.findAllCourses(11);
    // this.courseService.findAllCourses(11)
    //   .then(courses => this.courses = courses);
  }
}
