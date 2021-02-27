import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login_form: FormGroup
  logged = false
  buttonClasses = ["button"]
  buttonText = "Login"
  constructor(private fb: FormBuilder) {
    this.login_form = this.fb.group(
      {
        email: [""],
        password: [""],
      })
  }
  login() {
    this.logged = true
    this.buttonClasses = ["button", "registered"]
    this.buttonText = "¡Gracias!"
  }
  ngOnInit(): void {
  }

}
