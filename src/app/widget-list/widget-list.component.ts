import { Component, OnInit } from '@angular/core';
import {TopicServiceClient} from '../services/topic.service.client';
import {ActivatedRoute} from '@angular/router';
import {WidgetServiceClient} from '../services/widget.service.client';

@Component({
  selector: 'app-widget-list',
  templateUrl: './widget-list.component.html',
  styleUrls: ['./widget-list.component.css']
})
export class WidgetListComponent implements OnInit {
  moduleId;
  courseId;
  lessonId;
  topicId;
  widgets = [];

  constructor(private widgetService: WidgetServiceClient, private route: ActivatedRoute) {
    this.route.params.subscribe(params => this.setParams(params));
  }

  setParams(params) {
    this.moduleId = params['mid'];
    this.courseId = params['cid'];
    this.lessonId = params['lid'];
    this.topicId = params['tid'];
  }
  ngOnInit() {
    this.widgets = this.widgetService.findWidgetsForTopic(this.topicId);
    console.log(this.widgets);
  }
}
