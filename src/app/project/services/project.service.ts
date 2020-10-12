import { Injectable } from '@angular/core';
import { Project } from '../models/project';
import { Filter } from '../models/filter';


@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private projects: Project[];
  private lastId: number;

  constructor() {
    this.projects = [];
    this.lastId = 0;

    this.add({
      name: 'Código voluntário',
      url: 'https://github.com/thiagolima08/codigovoluntario',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      tags: ['Angular', 'TypeScript']
    });

    this.add({
      name: 'Cool project',
      url: 'https://github.com',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      tags: ['Node', 'TypeScript']
    });

    this.add({
      name: 'Another cool project',
      url: 'https://github.com',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      tags: ['C++']
    });

    this.add({
      name: 'Yet Another cool project',
      url: 'https://github.com',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      tags: ['C++']
    });
  }

  get(filter: Filter={}) {
    let result = this.projects.map((p) => p); // Shallow Clone

    if (filter.name) {
      result = result.filter((p) => p.name.includes(filter.name));
    }

    if (filter.url) {
      result = result.filter((p) => p.url.includes(filter.url));
    }

    if (filter.description) {
      result = result.filter((p) => p.description.includes(filter.description));
    }

    if (filter.tags) {
      result = result.filter((p) => filter.tags.reduce((result, current) => result || p.tags.includes(current), false));
    }

    return result;
  }

  add(project: Project) {
    this.projects.push({...project, id: this.lastId++});
  }

  remove(project: Project) {
    const index = this.projects.indexOf(project);

    if (index >= 0) {
      this.projects.splice(index, 1);
    }
  }
}
