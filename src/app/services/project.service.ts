import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable, of } from 'rxjs';
import {Project} from '../Project';
import { PROJECTS } from '../mock-projects';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  }),
};

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private apiUrl = 'http://localhost:5000/projects'

  constructor(private http:HttpClient) { }

  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(this.apiUrl);
  }

  deleteProjects(project: Project): Observable<Project> {
    const url = `${this.apiUrl}/${project.id}`;
    return this.http.delete<Project>(url);
  }

  updateProjectReminder(project: Project): Observable<Project> {
    const url = `${this.apiUrl}/${project.id}`;
    return this.http.put<Project>(url, project, httpOptions)
  }

  addProject(project: Project): Observable<Project> {
    return this.http.post<Project>(this.apiUrl, project, httpOptions);
  }
}
