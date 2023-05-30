import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ProjectItemComponent } from './components/project-item/project-item.component';
import { AddProjectComponent } from './components/add-project/add-project.component';
import { AboutComponent } from './components/about/about.component';
import { FooterComponent } from './components/footer/footer.component';
import { PortfolioPersonalComponent } from './components/portfolio-personal/portfolio-personal.component';
import { ContactMeComponent } from './components/contact-me/contact-me.component';
import { NavbarComponent } from './components/navbar/navbar.component';
const appRoutes: Routes = [
  {path: '', component: PortfolioPersonalComponent},
  {path: 'projects', component:HeaderComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact-me', component: ContactMeComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    ProjectsComponent,
    ProjectItemComponent,
    AddProjectComponent,
    FooterComponent,
    PortfolioPersonalComponent,
    ContactMeComponent,
    AboutComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes, {enableTracing: true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
