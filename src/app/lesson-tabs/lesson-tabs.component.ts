import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {LessonServiceClient} from '../services/lesson.service.client';

@Component({
  selector: 'app-lesson-tabs',
  templateUrl: './lesson-tabs.component.html',
  styleUrls: ['./lesson-tabs.component.css']
})
export class LessonTabsComponent implements OnInit {

  moduleId;
  courseId;
  lessons = [];

  constructor(private lessonService: LessonServiceClient, private route: ActivatedRoute) {
    this.route.params.subscribe(params => this.setParams(params));
  }

  setParams(params) {
    this.moduleId = params['mid'];
    this.courseId = params['cid'];

  }

  ngOnInit() {
    console.log(this.moduleId)
    this.lessons = this.lessonService.findLessonsForModule(this.moduleId);
    console.log('test');
    console.log(this.lessons);
  }
}
