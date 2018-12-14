import {Injectable} from '@angular/core';

@Injectable()
export class ModuleServiceClient {
  MODULE_URL = 'http://localhost:8080/api/';
  modules = [{id: 1, title: 'Mod 1'}, {id: 2, title: 'Mod 2'}, {id: 3, title: 'Mod 3'}];

  findModulesForCourse(courseId) {
    const c = ' - course ' + courseId;
    this.modules = [{id: 1, title: 'Mod 1' + c }, {id: 2, title: 'Mod 2' + c }, {id: 3, title: 'Mod 3' + c }];
    return this.modules;
    // return fetch(this.MODULE_URL + 'course/' + courseId + '/module')
    //   .then(response => response.json());
  }

  findModuleById(moduleId) {
    for (let i = 0 ; i < this.modules.length ; i++) {
      if (this.modules[i].id === moduleId) {
        return this.modules[i];
      }
      return [];
    }
    // return fetch(this.MODULE_URL + 'module/' + moduleId)
    //   .then(response => response.json());
  }

  findAllModules() {
    return this.modules;
    // return fetch(this.MODULE_URL + 'module')
    //   .then(response => response.json());
  }
}
