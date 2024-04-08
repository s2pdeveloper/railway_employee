import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }
  get(key: string) {
    return localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key) ?? '') : null;
  }

  set(key: string, value: any): void {
    if (value) {
      localStorage.setItem(key, JSON.stringify(value));
    }
  }
  remove(key: string) {
    localStorage.removeItem(key)
  }
}
