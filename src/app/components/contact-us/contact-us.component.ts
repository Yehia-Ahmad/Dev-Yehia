import { Component, AfterViewInit, OnChanges, SimpleChanges, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { DarkModeService } from 'src/app/services/dark-mode.service';
import emailjs from '@emailjs/browser';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import ContactAnimationComponent from './contact';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import DoneAnimationComponent from './done';
import badRequestAnimationComponent from './badRequest';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export default class ContactUsComponent implements OnInit, AfterViewInit, OnChanges {
  classesBlue: any;
  classesIcons: any;
  classesTitle: any;
  classesSubtitle: any;
  isDarkMode: any;
  classesInput: any;
  contactRootId = 'contactRootId';
  doneRootId = 'doneRootId';
  badRequestRootId = 'badRequestRootId';
  emailStatus: boolean = false;
  badRequest: boolean = false;
  form: FormGroup = this.fb.group({
    from_name: ['', Validators.required],
    to_name: 'Yehia',
    from_email: ['', Validators.required],
    subject: ['', Validators.required],
    message: ['', Validators.required],
  });

  constructor(private fb: FormBuilder, private darkModeService: DarkModeService, private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {
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

  ngOnChanges(changes: SimpleChanges) {
    this.render();
  }

  ngAfterViewInit() {
    this.render();
  }

  private render() {
    ReactDOM.render(React.createElement(ContactAnimationComponent), document.getElementById(this.contactRootId));
    ReactDOM.render(React.createElement(DoneAnimationComponent), document.getElementById(this.doneRootId));
    ReactDOM.render(React.createElement(badRequestAnimationComponent), document.getElementById(this.badRequestRootId));
  }

  async submitForm() {
    emailjs.init("f6kgHN5gBMGEC6HVd");
    let emailTemplate = await emailjs.send("service_78gzm0s", "template_ueffsgg", {
      from_name: this.form.value.from_name,
      to_name: this.form.value.to_name,
      from_email: this.form.value.from_email,
      subject: this.form.value.subject,
      message: this.form.value.message,
    });

    if (emailTemplate.status == 200) {
      this.emailStatus = true;
      this.badRequest = false;
      this.render();
    } else {
      this.badRequest = true;
      this.emailStatus = false;
    }
    this.form.reset();
  }
}
