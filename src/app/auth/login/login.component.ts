import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CredentialsService } from '../../shared/credentials.service.ts';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  form: FormGroup = new FormGroup({
    app_id: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(255)]),
    app_key: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(255)])
  });

  constructor(private credsManager: CredentialsService, private router: Router) {
    this.form.patchValue(this.credsManager.credentials);
  }

  formSubmitHandler(e: Event) {
    if (e) {
      e.preventDefault();
    }
    if (this.form.invalid) {
      return this.markFormAsDirty(this.form);
    }

    this.credsManager.credentials = this.form.value;
    this.router.navigate(['./gallery']);
  }

  markFormAsDirty(form) {
    for (const ctrl in form['controls']) {
      form['controls'][ctrl].markAsTouched();
    }
    return false;
  }

}
