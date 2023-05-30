import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Project } from 'src/app/Project';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.css']
})
export class ProjectItemComponent {
  @Input() project!: Project;
  @Output() onDeleteProject: EventEmitter<Project> = new EventEmitter();
  @Output() onToggleReminder: EventEmitter<Project> = new EventEmitter();
  faTimes = faTimes;

  onDelete(project: Project) {
    this.onDeleteProject.emit(project);
  }
  onToggle(project: Project) {
    this.onToggleReminder.emit(project);
  }
}
