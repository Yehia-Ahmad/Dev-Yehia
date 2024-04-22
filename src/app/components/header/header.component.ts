import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { DarkModeService } from 'src/app/services/dark-mode.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  classes: any;
  classesSubtitle: any;
  classesSecndary: any;
  classesBorder: any;
  isDarkMode: any;
  hideListMenu: boolean = true;

  constructor(private darkModeService: DarkModeService, private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {
    this.matIconRegistry.addSvgIcon(
      'menu',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/menu.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'moon',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/moon.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'sun',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/sun.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'close',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/close.svg')
    );
  }

  ngOnInit() {
    this.darkModeService.isDarkMode.subscribe((res: boolean) => {
      this.isDarkMode = res;
      this.classes = {
        'dark-mode': this.isDarkMode,
        'light-mode': !this.isDarkMode,
      };

      this.classesSubtitle = {
        'dark-mode-subtitle': this.isDarkMode,
        'light-mode-subtitle': !this.isDarkMode,
      };

      this.classesSecndary = {
        'dark-mode-secondary': this.isDarkMode,
        'light-mode-secondary': !this.isDarkMode,
      };
      this.classesBorder = {
        'dark-mode-border': this.isDarkMode,
        'light-mode-border': !this.isDarkMode,
      };
    });
  }

  toggleMode() {
    this.darkModeService.isDarkMode.next(!this.isDarkMode);
    this.isDarkMode = this.darkModeService.isDarkMode.value;
    this.darkModeService.setItem('isDarkMode', this.isDarkMode);
  }

  toggleListMenu() {
    this.hideListMenu = !this.hideListMenu;
  }

}
