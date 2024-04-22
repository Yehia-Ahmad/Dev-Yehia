import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { DarkModeService } from 'src/app/services/dark-mode.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  classesBlue: any;
  classesIcons: any;
  classesTitle: any;
  classesSubtitle: any;
  isDarkMode: any;

  constructor(private darkModeService: DarkModeService, private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {
    this.matIconRegistry.addSvgIcon(
      'verified',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/verified.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'twitter',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/twitter.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'facebook',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/facebook.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'github',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/github.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'linkedin',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/linkedIn.svg')
    );
  }

  ngOnInit(): void {
    this.darkModeService.isDarkMode.subscribe((res: boolean) => {
      this.isDarkMode = res;
      this.classesTitle = {
        'dark-mode-title': this.isDarkMode,
        'light-mode-title': !this.isDarkMode,
      };
      this.classesBlue = {
        'dark-mode-verified': this.isDarkMode,
        'light-mode-verified': !this.isDarkMode,
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

  goToLink(platForm: string): void {
    if (platForm === 'twitter') {
      window.open('https://twitter.com/yaya_ahmed255', '_blank');
    } else if (platForm === 'facebook') {
      window.open('https://www.facebook.com/yehia.kassem.16?locale=ar_AR', '_blank');
    } else if (platForm === 'github') {
      window.open('https://github.com/Yehia-Ahmad', '_blank');
    } else if (platForm === 'linkedin') {
      window.open('https://www.linkedin.com/in/yehia-ahmad-2a8a26196/', '_blank');
    }

  };
}
