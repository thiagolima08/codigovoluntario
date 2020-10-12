import { Component, OnInit } from '@angular/core';
import { ProjectService } from './../../services/project.service';
import { Project } from './../../models/project';

@Component({
  selector: 'app-add-project-page',
  templateUrl: './add-project-page.component.html',
  styleUrls: ['./add-project-page.component.css']
})
export class AddProjectPageComponent implements OnInit {

  projects: Project[];

  constructor(projectService: ProjectService) {
    this.projects = projectService.get();
  }

  ngOnInit(): void {
  }

  alert(text: string) {
    window.alert(text);
  }

}
