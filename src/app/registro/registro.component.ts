import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  registro_form: FormGroup
  registered = false
  buttonClasses = ["button"]
  buttonText = "Registro"

  constructor(private fb: FormBuilder) {
    this.registro_form = this.fb.group(
      {
        first: ["", Validators.required],
        last: ["", Validators.required],
        phone: [""],
        email: ["", Validators.required],
        password: ["", [Validators.required, Validators.minLength(6)]],
        confirmation: ["", [Validators.required, Validators.minLength(6)]],
      })
  }
  register() {
    this.registered = true
    this.buttonClasses = ["button", "registered"]
    this.buttonText = "¡Gracias!"
  }
  ngOnInit(): void {
  }


}
