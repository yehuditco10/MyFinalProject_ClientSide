import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { LoginService } from '../../Services/login.service';
import { Router } from '@angular/router';
import { register } from '../../Models/register';
import { EmailService } from '../../Services/email.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  message: string = ""

  constructor(private loginService: LoginService,
    private router: Router,
    private fb: FormBuilder,
    private emailService:EmailService) { }

  registerForm = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    confirmPassword: new FormControl('', [Validators.required, Validators.minLength(6)])
  })
  public checkError = (controlName: string, errorName: string) => {
    return this.registerForm.controls[controlName].hasError(errorName);
  }

  confirmPassword(password: string, confirm: string) {
    return password === confirm;
  }

  onSubmit() {
    debugger;
    const newCustomer: register = this.registerForm.value
    if (!this.confirmPassword(newCustomer.password, this.registerForm.controls.confirmPassword.value)) {
      alert("password and confirm are not same");
      return
    }
    this.message = "Sending request...";
    this.loginService.register(newCustomer).subscribe(
      success => {
        if (success === true) {
          this.message = "Register succeeded!"
          this.getVerificationPage(newCustomer.email)
        }
        else
          this.message = "Registration failed, this email is probably already owned by another user."
      },
      error => { console.log(error), this.message = "Try again" }
    )
  }
  getVerificationPage(email: string) {
    
   this.emailService.email=email;
    this.router.navigate(['verification']);
  }
  goLogin() {
    this.router.navigate(['login']);
  }
}