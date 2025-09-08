import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { BlogService } from '../../Core/services/blog.service';


@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {
constructor( private _FormBuilder:FormBuilder,private _BlogService:BlogService
){}
postFrom:FormGroup=this._FormBuilder.group({
  title:[null,[Validators.required]],
  body:[null,[Validators.required]],
  userId:[null,[Validators.required]]
});
 submitForm():void{
  this._BlogService.createPost(this.postFrom.value).subscribe({
    next:(res)=>{
console.log(res);
    },
    error:(err)=>{
      console.log(err);
    },
    
  });
}

}
