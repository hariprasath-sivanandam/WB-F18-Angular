// •	findAllWidgets()    findWidgetsForTopic(topicId)        findWidgetById(widgetId)

import {Injectable} from '@angular/core';

@Injectable()
export class WidgetServiceClient {
  WIDGET_URL = 'http://localhost:8080/api/';
  widgets = [{id: 1, title: 'Widget 1'}, {id: 2, title: 'Widget 2'}, {id: 3, title: 'Widget 3'}];

  findWidgetsForTopic(topicId) {
    const t = ' - Topic ' + topicId;
    this.widgets = [{id: 1, title: 'Widget 1' + t}, {id: 2, title: 'Widget 2' + t}, {id: 3, title: 'Widget 3' + t}];
    return this.widgets;
    // return fetch(this.WIDGET_URL + 'topic/' + topicId + '/widget')
    //   .then(response => response.json());
  }

  findWidgetById(widgetId) {
    for (let i = 0 ; i < this.widgets.length ; i++) {
      if (this.widgets[i].id === widgetId) {
        return this.widgets[i];
      }
      return [];
    }
    // return fetch(this.WIDGET_URL + 'widget/' + widgetId)
    //   .then(response => response.json());
  }

  findAllWidgets() {
    return this.widgets;
    // return fetch(this.WIDGET_URL + 'widget')
    //   .then(response => response.json());
  }
}
