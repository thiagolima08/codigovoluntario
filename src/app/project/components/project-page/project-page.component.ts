import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ProjectService} from '../../services/project.service';
import {Project} from '../../models/project';

@Component({
  selector: 'app-project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.css']
})
export class ProjectPageComponent implements OnInit {

  id: String;
  project: Project;
  currentRate = 0;

  constructor(private projectService: ProjectService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.projectService.getProject(Number(this.id)).subscribe(p => this.project = p);
    console.log(this.project);
  }

}
