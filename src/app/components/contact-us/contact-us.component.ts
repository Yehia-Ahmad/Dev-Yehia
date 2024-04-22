import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { DarkModeService } from 'src/app/services/dark-mode.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent {
  classesBlue: any;
  classesIcons: any;
  classesTitle: any;
  classesSubtitle: any;
  isDarkMode: any;
  classesInput: any;

  constructor(private darkModeService: DarkModeService, private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {
    this.matIconRegistry.addSvgIcon(
      'mail',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/mailme.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'mail-animation',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/mail-animation.svg')
    );
  }

  ngOnInit(): void {
    this.darkModeService.isDarkMode.subscribe((res: boolean) => {
      this.isDarkMode = res;
      this.classesTitle = {
        'dark-mode-title': this.isDarkMode,
        'light-mode-title': !this.isDarkMode,
      };
      this.classesSubtitle = {
        'dark-mode-subtitle': this.isDarkMode,
        'light-mode-subtitle': !this.isDarkMode,
      };
      this.classesInput = {
        'dark-mode-input': this.isDarkMode,
        'light-mode-input': !this.isDarkMode,
      };
    });
  }

}
