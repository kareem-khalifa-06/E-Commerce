import { Component, HostListener } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgClass } from '@angular/common';

import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, NgClass],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
constructor ( private _Router:Router) {}
  registerForm :FormGroup=new FormGroup(
    {  
      Username: new FormControl(null,[Validators.minLength(3),Validators.maxLength(15),Validators.required]),
      Email: new FormControl(null,[Validators.required,Validators.email,Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)]),
      Password: new FormControl(null,[Validators.required,Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)]),
      confirmPassword: new FormControl(null,[Validators.required,Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)]),
      Phone: new FormControl(null,[Validators.required,Validators.pattern(/^01[0125][0-9]{8}$/)
      ]),

    },this.comparePassword
  );
  comparePassword(form: AbstractControl): null | object {
    const password = form.get('Password')?.value;
    const confirmPassword = form.get('confirmPassword')?.value;
  
    if (password === confirmPassword) {
      return null;
    } else {
      return { mismatch: true };
    }
  }
submitForm():void{
if(this.registerForm.valid){
  console.log(this.registerForm);
// this._authService.registerUser(this.registerForm.value).subscribe({
//   next:(res)=>{
// alert(res);
//   },
//   error:(err)=>{
//     console.log(err);
//   }
// });
setTimeout(()=>{this._Router.navigate(["/auth/login"]);},2000);
}
  


else{
  this.registerForm.markAllAsTouched();
  this.registerForm.setErrors({mismatch:true});
}}

}
