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
  an: boolean = false;
  re: boolean = false;
  classesBlue: any;
  classesTitle: any;
  classesSubtitle: any;
  classesIcons: any;
  isDarkMode: any;
  allProjects = myProjects;

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

  toggleActiveButton(button: string) {
    switch (button) {
      case 'all':
        this.all = true; this.js = false; this.an = false; this.re = false;
        break;
      case 'js':
        this.all = false;
        this.js = true;
        this.an = false;
        this.re = false;
        break;
      case 'an':
        this.all = false;
        this.js = false;
        this.an = true;
        this.re = false;
        break;
      case 're':
        this.all = false;
        this.js = false;
        this.an = false;
        this.re = true;
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
