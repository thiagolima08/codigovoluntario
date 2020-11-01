import { Injectable } from '@angular/core';
import { Project } from '../models/project';
import { Filter } from '../models/filter';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  // URL_PROJECTS = 'https://my-json-server.typicode.com/thiagolima08/codigovoluntario/projects/'; Comentado apenas para realizar testes
  URL_PROJECTS = 'http://localhost:3000/projects';
  constructor(private httpClient: HttpClient) {
  }

  // get(filter: Filter={}) {
  //   let result = this.projects.map((p) => p); // Shallow Clone
  //
  //   if (filter.name) {
  //     result = result.filter((p) => p.name.includes(filter.name));
  //   }
  //
  //   if (filter.url) {
  //     result = result.filter((p) => p.url.includes(filter.url));
  //   }
  //
  //   if (filter.description) {
  //     result = result.filter((p) => p.description.includes(filter.description));
  //   }
  //
  //   if (filter.tags) {
  //     result = result.filter((p) => filter.tags.reduce((result, current) => result || p.tags.includes(current), false));
  //   }
  //
  //   return result;
  // }

  // add(project: Project) {
  //   this.projects.push({...project, id: this.lastId++});
  // }
  //
  // remove(project: Project) {
  //   const index = this.projects.indexOf(project);
  //
  //   if (index >= 0) {
  //     this.projects.splice(index, 1);
  //   }
  // }

  getProjects(): Observable<Project[]> {
    return this.httpClient.get<Project[]>(this.URL_PROJECTS);
  }

  addProject(project: Project): Observable<Project>{
    return this.httpClient.post<Project>(this.URL_PROJECTS, project);
  }
}
