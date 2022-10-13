import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { MaterialModule } from '../material.module';



@NgModule({
  declarations: [
    LoginPageComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ],
})
export class AuthModule { }
