import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
    this.isChrome = navigator.userAgent.includes("Chrome");
    this.classes = {
      'dark-mode': this.isDarkMode,
      'light-mode': !this.isDarkMode,
      'mozilla-style': !this.isChrome
    };
  }
}
