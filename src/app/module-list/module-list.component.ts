import { Component, OnInit } from '@angular/core';
import {ModuleServiceClient} from '../services/module.service.client';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-module-list',
  templateUrl: './module-list.component.html',
  styleUrls: ['./module-list.component.css']
})
export class ModuleListComponent implements OnInit {
  courseId;
  modules = [];

  constructor(private moduleService: ModuleServiceClient, private route: ActivatedRoute) {
    this.route.params.subscribe(params => this.setParams(params));
  }

  setParams(params) {
    this.courseId = params['cid'];
  }

  ngOnInit() {
    this.modules = this.moduleService.findModulesForCourse(this.courseId);
    console.log(this.modules);
  }

}
