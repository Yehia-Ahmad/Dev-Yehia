import { Component, OnInit } from '@angular/core';
import { DarkModeService } from './services/dark-mode.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Dev Yehia';
  isDarkMode: boolean = true;
  isChrome: boolean = true;
  classes: any;

  constructor(private darkModeService: DarkModeService) { }

  ngOnInit() {
    this.isDarkMode = this.darkModeService.getItem('isDarkMode');
    this.darkModeService.isDarkMode.next(this.isDarkMode);
    this.isChrome = navigator.userAgent.includes("Chrome");
    this.darkModeService.isDarkMode.subscribe((res: boolean) => {
      this.isDarkMode = res;
      this.classes = {
        'dark-mode': this.isDarkMode,
        'light-mode': !this.isDarkMode,
        'mozilla-style': !this.isChrome
      };
    });
  }
}
