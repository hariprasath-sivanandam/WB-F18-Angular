import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {TopicServiceClient} from '../services/topic.service.client';

@Component({
  selector: 'app-topic-pills',
  templateUrl: './topic-pills.component.html',
  styleUrls: ['./topic-pills.component.css']
})
export class TopicPillsComponent implements OnInit {

  moduleId;
  courseId;
  lessonId;
  topics = [];

  constructor(private topicService: TopicServiceClient, private route: ActivatedRoute) {
    this.route.params.subscribe(params => this.setParams(params));
  }

  setParams(params) {
    this.moduleId = params['mid'];
    this.courseId = params['cid'];
    this.lessonId = params['lid'];
  }

  ngOnInit() {
    this.topics = this.topicService.findTopicsForLesson(this.lessonId);
    console.log(this.topics);
  }

}
