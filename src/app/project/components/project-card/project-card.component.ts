import { ThrowStmt } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { Project } from '../../models/project';
import {AddProjectPageComponent} from '../../pages/add-project-page/add-project-page.component';
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

  constructor(private projectService: ProjectFirestoreService, private router: Router ) { }

  ngOnInit(): void {
    this.projectService.getProjectFirestore().subscribe(p =>  this.projects = p);
  }

  update(id: string): void {
    this.router.navigate([ `/project/${id}` ]);
  }

  delete(id: string): void {
    this.projectService.deleteProjectFirestore(id).subscribe(() => {
      this.projects = this.projects.filter(p => p.id !== id);

      // console.debug(`${id} deleted`);
    });
  }
}
