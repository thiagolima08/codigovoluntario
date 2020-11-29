import { Injectable } from '@angular/core';
import {from, Observable} from 'rxjs';
import {Project} from '../models/project';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProjectFirestoreService {

   colecaoProject: AngularFirestoreCollection<Project>;
   NOME_COLECAO = 'projetos';


  constructor(private afs: AngularFirestore) {
    this.colecaoProject = afs.collection(this.NOME_COLECAO);
  }

  getProjectFirestore(): Observable<Project[]> {
    return this.colecaoProject.valueChanges({idField: 'id'});
  }

  addProjectFirestore(projeto: Project ): Observable<object>{
    delete projeto.id;

    return from(this.colecaoProject.add(Object.assign({}, projeto)));
  }

  deleteProjectFirestore(id: string): Observable<void>{
    return from(this.colecaoProject.doc(id).delete());
  }

  getProjectPorIdFirestore(id: string): Observable<Project>{
    return this.colecaoProject.doc(id).get().pipe(map(document => new Project()));

  }

  updateProjectFirestore(projeto: Project): Observable<void>{
    delete projeto.id;
    return from(this.colecaoProject.doc(projeto.id).update(Object.assign({}, projeto)));
  }
}
