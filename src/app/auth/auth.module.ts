import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { AuthRoutes } from './auth.routes';
import * as admUI from 'admanic-ui';
import { ReactiveFormsModule } from '@angular/forms';
import { CredentialsService } from '../shared/credentials.service.ts';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AuthRoutes),
    ReactiveFormsModule,
    admUI.InputModule,
    admUI.ToastModule.forRoot()
  ],
  declarations: [LoginComponent],
  providers: []
})
export class AuthModule {
}
