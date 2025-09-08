import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgClass } from '@angular/common';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [NgClass,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
constructor(private _formBuilder:FormBuilder, private _Router:Router){}
loginForm:FormGroup= this._formBuilder.group({
  email:[null,[Validators.required,Validators.email,Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)]],
  password:[null,[Validators.required,Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)]]});
  comparePassword() {
    
  }
  submitForm():void{
    if(this.loginForm.valid)
{   
   console.log(this.loginForm);
   setTimeout(()=>{this._Router.navigate(["/user/user-home"]);},2000);
// call api here 
}
else{
  this.loginForm.markAllAsTouched();

}
  }
}
