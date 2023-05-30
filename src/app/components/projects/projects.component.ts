import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/services/project.service';
import {Project} from '../../Project';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [];

  constructor(private projectService: ProjectService){

  }
  ngOnInit(): void {
    this.projectService.getProjects().subscribe((projects) => this.projects= projects);
  }

  deleteProject(project: Project){
    this.projectService.deleteProjects(project).subscribe(() => this.projects = this.projects.filter((p) => p.id !== project.id));
  }

  toggleReminder(project: Project){
    project.reminder = !project.reminder;
    this.projectService.updateProjectReminder(project).subscribe();
  }

  addProject(project: Project) {
    this.projectService.addProject(project).subscribe((project) => (this.projects.push(project)));
  }
}
