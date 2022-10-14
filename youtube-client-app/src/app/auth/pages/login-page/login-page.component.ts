import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'; 

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {

  loginForm!: FormGroup;

  hide: boolean = true;

  ngOnInit() {
    this.loginForm = new FormGroup({
      login: new FormControl('', Validators.required),
      password: new FormControl('password'),
    });
  }

  onSubmit() {
    console.log(this.loginForm);
    this.loginForm.reset();
  }

  getErrorMessage() {

  }

}
