import { ThrowStmt } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { Project } from '../../models/project';
import {AddProjectPageComponent} from '../add-project-page/add-project-page.component';
import {ProjectService} from '../../services/project.service';
import { Router } from '@angular/router';
import {ProjectFirestoreService} from '../../services/project-firestore.service';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css']
})
export class ProjectCardComponent implements OnInit {

  projects: Project[];

  constructor(private projectService: ProjectService, private router: Router ) { }

  ngOnInit(): void {
    this.projectService.getProjects().subscribe(p =>  this.projects = p);
  }

  update(id: string): void {
    this.router.navigate([ `/project/${id}` ]);
  }

  delete(id: number): void {
    this.projectService.deleteProject(id).subscribe(() => {
      // @ts-ignore
      this.projects = this.projects.filter(p => p.id !== id);

      // console.debug(`${id} deleted`);
    });
  }
}
