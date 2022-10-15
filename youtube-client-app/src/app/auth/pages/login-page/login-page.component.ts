import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms'; 
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/youtube/services/local-storage/local-storage.service';
import { AuthService } from '../../services/auth-service/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {

  loginForm!: FormGroup;

  hide: boolean = true;

  constructor(private authService: AuthService, private localStorageService: LocalStorageService, private router: Router) {}

  ngOnInit() {
    this.loginForm = new FormGroup({
      login: new FormControl('', Validators.required),
      password: new FormControl('password', Validators.required),
    });
  }

  onSubmit(formDirective: FormGroupDirective) {
    const userToken = this.loginForm.value.login + this.loginForm.value.password;
    this.localStorageService.setUserToken(userToken);

    this.authService.onLogin();
    this.authService.setUserData(this.loginForm.value.login);
    this.router.navigate(['/search-results']);

    formDirective.resetForm();
    this.loginForm.reset();
  }

  getErrorMessage() {

  }

}
