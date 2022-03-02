import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Home/home/home.component';
import { ProjectsComponent } from './Home/projects/projects.component';
import { ContactComponent } from './Home/contact/contact.component';
import { ResumeComponent } from './Home/resume/resume.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'Projects',
    component: ProjectsComponent,
  },
  {
    path: 'Contact',
    component: ContactComponent,
  },
  {
    path: 'Resume',
    component: ResumeComponent,
  },
  {
    path: '**',
    component: HomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
