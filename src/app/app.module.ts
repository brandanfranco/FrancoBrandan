import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SidebarComponent } from './Menu/sidebar/sidebar.component';
import { HomeComponent } from './Home/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { ProjectsComponent } from './Home/projects/projects.component';
import { ContactComponent } from './Home/contact/contact.component';
import { ResumeComponent } from './Home/resume/resume.component';

@NgModule({
  declarations: [AppComponent, SidebarComponent, HomeComponent, ProjectsComponent, ContactComponent, ResumeComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
