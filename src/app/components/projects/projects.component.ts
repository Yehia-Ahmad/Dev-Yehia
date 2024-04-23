import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { myProjects } from 'src/app/core/projectsObject';
import { DarkModeService } from 'src/app/services/dark-mode.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  all: boolean = true;
  js: boolean = false;
  ng: boolean = false;
  re: boolean = false;
  classesBlue: any;
  classesTitle: any;
  classesSubtitle: any;
  classesIcons: any;
  isDarkMode: any;
  allProjects: any = myProjects;

  constructor(private darkModeService: DarkModeService, private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {
    this.matIconRegistry.addSvgIcon(
      'github',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/github.svg')
    );
  }

  ngOnInit() {
    this.darkModeService.isDarkMode.subscribe((res: boolean) => {
      this.isDarkMode = res;
      this.classesTitle = {
        'dark-mode-title': this.isDarkMode,
        'light-mode-title': !this.isDarkMode,
      };
      this.classesBlue = {
        'dark-mode-blue': this.isDarkMode,
        'light-mode-blue': !this.isDarkMode,
      };
      this.classesSubtitle = {
        'dark-mode-subtitle': this.isDarkMode,
        'light-mode-subtitle': !this.isDarkMode,
      };
      this.classesIcons = {
        'dark-mode-icons': this.isDarkMode,
        'light-mode-icons': !this.isDarkMode,
      };
    });
  }

  toggleActiveButton(projectType: string) {
    switch (projectType) {
      case 'all':
        this.all = true; this.js = false; this.ng = false; this.re = false;
        this.allProjects = myProjects;
        break;
      case 'js':
        this.all = false;
        this.js = true;
        this.ng = false;
        this.re = false;
        this.allProjects = myProjects.filter((project: any) => project.category[0] === 'js');
        break;
      case 'ng':
        this.all = false;
        this.js = false;
        this.ng = true;
        this.re = false;
        this.allProjects = myProjects.filter((project: any) => project.category[0] === 'ng');
        break;
      case 're':
        this.all = false;
        this.js = false;
        this.ng = false;
        this.re = true;
        this.allProjects = myProjects.filter((project: any) => project.category[0] === 'react');
        break;
    }
  }

  openProject(project: any) {
    window.open(project.link, '_blank');
  }

  openProjectSource(project: any) {
    window.open(project.githubLink, '_blank');
  }

}
