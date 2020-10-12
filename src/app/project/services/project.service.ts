import { Injectable } from '@angular/core';
import { Project } from '../models/project';

class Filter {
  name?: string;
  url?: string;
  description?: string;
  tags?: string[];
}

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private projects: Project[];

  constructor() {
    this.projects.push({
      name: 'Código voluntário',
      url: 'https://github.com/thiagolima08/codigovoluntario',
      description: '',
      tags: ['Angular', 'TypeScript']
    });

    this.projects.push({
      name: 'Cool project',
      url: 'https://github.com',
      description: '',
      tags: ['Node', 'TypeScript']
    });

    this.projects.push({
      name: 'Another cool project',
      url: 'https://github.com',
      description: '',
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
    this.projects.push(project);
  }

  remove(project: Project) {
    const index = this.projects.indexOf(project);

    if (index >= 0) {
      this.projects.splice(index, 1);
    }
  }
}
