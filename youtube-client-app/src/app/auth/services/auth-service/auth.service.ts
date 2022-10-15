import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedIn = false;

  userData: BehaviorSubject<string> = new BehaviorSubject('');

  onLogin() {
    this.isLoggedIn = true;
  }

  onLogout() {
    this.isLoggedIn = false;
    this.userData.next('');
  }

  get isAuthentificated() {
    return this.isLoggedIn;
  }
  
  setUserData(userLogin: string) {
    this.userData.next(userLogin);
  }
}
