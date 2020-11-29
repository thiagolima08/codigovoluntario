import { Component, OnInit } from '@angular/core';
// import { ProjectService } from './../../services/project.service';
import { Project } from './../../models/project';
import {FormBuilder, FormGroup} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import {ProjectFirestoreService} from '../../services/project-firestore.service';

@Component({
  selector: 'app-add-project-page',
  templateUrl: './add-project-page.component.html',
  styleUrls: ['./add-project-page.component.css']
})
export class AddProjectPageComponent implements OnInit {

  constructor(private projectService: ProjectFirestoreService, private fb: FormBuilder, private snackbar: MatSnackBar,  private route: ActivatedRoute) {
  }

  projectNew: Project;
  form: FormGroup;
  id: string;

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      if (params.get('id')) {
        this.id = String(params.get('id'));
        this.projectService.getProjectPorIdFirestore(this.id).subscribe(p => {
          this.form = this.fb.group({
            id: [p.id],
            name: [p.name],
            url: [p.url],
            description: [p.description],
            tags: [p.tags.join(',')]
          });
        });
      }
    });
    this.form = this.fb.group({
      id: [null],
      name: [null],
      url: [null],
      description: [null],
      tags: [null]
    });
  }

  insertProject(): void {
    if (this.id) {
      let t = this.form.value.tags.split(',');
      t = t.map( i => i.trim());
      this.form.value.tags = t;
      this.projectNew = this.form.value;
      this.projectService.updateProjectFirestore(this.projectNew).subscribe(
        project => console.log(project)
      );
      this.openSnackBar();
      this.form.reset();
    } else {
      this.projectService.getProjectFirestore().subscribe(p => this.form.value.id = p.length + 1);
      let t = this.form.value.tags.split(',');
      t = t.map( i => i.trim());
      this.form.value.tags = t;
      this.projectNew = this.form.value;
      this.projectService.addProjectFirestore(this.projectNew).subscribe(
        project => console.log(project)
      );
      this.openSnackBar();
      this.form.reset();
    }
  }

  openSnackBar(message: string = 'Projeto adicionado!' , action: string = 'Fechar'): void {
    this.snackbar.open(message, action, {
      duration: 2000,
    });
  }

}
