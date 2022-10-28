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

  isHidden: boolean = true;

  constructor(private authService: AuthService, private localStorageService: LocalStorageService, private router: Router) {}

  ngOnInit() {
    this.loginForm = new FormGroup({
      login: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, this.passwordValidador.bind(this)]),
    });
  }

  get login() {
    return this.loginForm.get('login');
  }

  get password() {
    return this.loginForm.get('password');
  }

  onSubmit(formDirective: FormGroupDirective) {
    if (this.loginForm.valid) {
      const userToken: string = this.login!.value + this.password!.value;
      this.localStorageService.setUserToken(userToken);
  
      this.authService.onLogin();
      this.authService.setUserData(this.login?.value);
      this.router.navigate(['/search-results']);
  
      this.loginForm.reset();
      formDirective.resetForm();
    }
  }

  togglePasswordHide() {
    this.isHidden = !this.isHidden;
  }

  getLoginErrorMessage() {
    if (this.login!.hasError('required')) {
      return 'Please enter a login email';
    } 
    return this.login!.hasError('email') ? 'The login email is invalid' : '';
  }

  getPasswordErrorMessage() {
    if (this.password!.hasError('required') && this.password?.touched) {
      return 'Please enter a password';
    } else if (this.password!.hasError('passwordInvalid') && this.password?.touched) {
      const message = 'Your password isn\'t strong enough. It should contain at least 8 characters, both uppercase and lowercase letters, numbers and at least one special character, e.g., ! @ # ? ]';      
      return message;
    } 
  }

  passwordValidador(control: FormControl) {
    const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&].{8,}$/gm;
    if (!regex.test(control.value)) {
      return { passwordInvalid: true };
    } else {
      return null;
    }
  }

}
