import {Injectable} from '@angular/core';

@Injectable()
export class LessonServiceClient {
  LESSON_URL = 'http://localhost:8080/api/';
  lessons = [{id: 1, title: 'Lesson 1'}, {id: 2, title: 'Lesson 2'}, {id: 3, title: 'Lesson 3'}];

  findLessonsForModule(moduleId) {
    const m = ' - Module ' + moduleId;
    this.lessons = [{id: 1, title: 'Lesson 1' + m }, {id: 2, title: 'Lesson 2' + m }, {id: 3, title: 'Lesson 3' + m }];
    return this.lessons;
    // return fetch(this.LESSON_URL + 'module/' + moduleId + '/lesson')
    //   .then(response => response.json());
  }

  findLessonById(lessonId) {
    for (let i = 0 ; i < this.lessons.length ; i++) {
      if (this.lessons[i].id === lessonId) {
        return this.lessons[i];
      }
      return [];
    }
    // return fetch(this.LESSON_URL + 'lesson/' + lessonId)
    //   .then(response => response.json());
  }

  findAllLessons() {
    return this.lessons;
    // return fetch(this.LESSON_URL + 'lesson')
    //   .then(response => response.json());
  }
}
