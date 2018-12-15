// •	findAllTopics()        findTopicsForLesson(lessonId)    findTopicById(topicId)
import {Injectable} from '@angular/core';

@Injectable()
export class TopicServiceClient {
  TOPIC_URL = 'http://localhost:8080/api/';
  topics = [{id: 1, title: 'Topic 1'}, {id: 2, title: 'Topic 2'}, {id: 3, title: 'Topic 3'}];

  findTopicsForLesson(lessonId) {
    if (lessonId === undefined) {
          return [];
    }
    const l = ' - Lesson ' + lessonId;
    this.topics = [{id: 1, title: 'Topic 1' + l}, {id: 2, title: 'Topic 2' + l}, {id: 3, title: 'Topic 3' + l}];
    return this.topics;
    // return fetch(this.TOPIC_URL + 'lesson/' + lessonId + '/topic')
    //   .then(response => response.json());
  }

  findTopicById(topicId) {
    for (let i = 0 ; i < this.topics.length ; i++) {
      if (this.topics[i].id === topicId) {
        return this.topics[i];
      }
      return [];
    }
    // return fetch(this.TOPIC_URL + 'topic/' + topicId)
    //   .then(response => response.json());
  }

  findAllTopics() {
    return this.topics;
    // return fetch(this.TOPIC_URL + 'topic')
    //   .then(response => response.json());
  }
}
