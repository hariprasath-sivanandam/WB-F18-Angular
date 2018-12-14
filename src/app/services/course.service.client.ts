import {Injectable} from '@angular/core';

@Injectable()
export class CourseServiceClient {
  COURSE_URL = 'http://localhost:8080/api/';
  constructor(){}

  findAllCourses(userId) {
    let courses = [{id: 1, title: 'CS5610 - WD'}, {id: 2, title: 'CS5200 - DBMS'}, {id: 3, title: 'CS5010 - PDP'}];
    return courses;
    // return fetch(this.COURSE_URL + 'user/' + userId + '/course')
    //   .then(response => response.json());
  }

  findCourseById(courseId) {
    let courses = [{id: 1, title: 'CS5610 - WD'}, {id: 2, title: 'CS5200 - DBMS'}, {id: 3, title: 'CS5010 - PDP'}];
    for (let i = 0 ; i < courses.length ; i++) {
      if (courses[i].id === courseId) {
        return courses[i];
      }
      return [];
    }
    // return fetch(this.COURSE_URL + 'course/' + courseId)
    //   .then(response => response.json());
  }
}
