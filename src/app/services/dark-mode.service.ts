import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DarkModeService {
  isDarkMode = new BehaviorSubject(false);

  constructor() { }

  setItem(key: string, value: boolean) {
    localStorage.setItem(key, String(value));
  }

  getItem(key: string): boolean {
    return localStorage.getItem(key) === 'true';
  }
}
