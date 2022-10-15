import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth-service/auth.service';
import { LocalStorageService } from 'src/app/youtube/services/local-storage/local-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {

  @Input() isClosed = true;

  public get userData() {
    if (this.authService.userData.value) {
      return `Hello, ${this.authService.userData.value}`;
    } else {
      return 'User Name';
    }
  }

  constructor(
    private authService: AuthService,
    private locatStorageService: LocalStorageService,
    private router: Router,
  ) {}

  onLogout() {
    this.locatStorageService.clearLocalStorage();
    this.authService.onLogout();
    this.router.navigate(['/login']);
  }

}
