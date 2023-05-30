import { Component } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  title: string = 'Projects';
  showAddProject: boolean = false;
  subscription!: Subscription;

  constructor(private uiService:UiService, private router: Router) {
    this.subscription = this.uiService
    .onToggle()
    .subscribe((value) => (this.showAddProject = value));
   }

  ngOnInit(): void {

  }
  toggleAddProject() {
    this.uiService.toggleAddProject();
  }

  hasRoute(route: string){
    return this.router.url === route;
  }
}
