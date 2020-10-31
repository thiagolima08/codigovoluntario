import { Component, Input, OnInit } from '@angular/core';
import { Project } from '../../models/project';
import {AddProjectPageComponent} from '../../pages/add-project-page/add-project-page.component';
import {ProjectService} from '../../services/project.service';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css']
})
export class ProjectCardComponent implements OnInit {

  projects: Project[];

  constructor(private projectService: ProjectService) { }

  ngOnInit(): void {
    this.projectService.getProjects().subscribe(p =>  this.projects = p);
  }

}
