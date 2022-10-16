import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {

  setUserToken(userToken: string) {
    localStorage.setItem('userToken', userToken);
  }

  getUserToken() {
    localStorage.getItem('userToken');
  }

  clearLocalStorage() {
    localStorage.clear();
  }

}