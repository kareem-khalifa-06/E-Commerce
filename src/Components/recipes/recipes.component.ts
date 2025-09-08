import { Validators } from '@angular/forms';

import { Component, ElementRef, input, ViewChild } from '@angular/core';
import { RecipesService } from '../../Core/services/recipes.service';
import { IRecipe } from './../../Core/Interfaces/irecipe';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipes',
  standalone: true,
  imports: [],
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.css'
})
export class RecipesComponent {
  constructor(private _RecipesService:RecipesService){}
  recipeFirstSub!:Subscription;
  recipeSecondSub!:Subscription;
ngOnInit():void{
  this.recipeFirstSub=
this._RecipesService.getRecipes('pizza').subscribe({
  next:(res)=>{
   
this.recipesData=res.recipes;
  },
  error:(err)=>{
console.log(err);
  }
});
}
recipesData!:IRecipe[];
@ViewChild('searchBar') searchInput!:ElementRef
searchRecipe():void{
  this.recipeSecondSub=
this._RecipesService.getRecipes(this.searchInput.nativeElement.value).subscribe({
  next:(res)=>{
    this.recipesData=res.recipes;
  },
  error:(err)=>{
    console.log(err);
  }
});
}
ngOnDestroy():void{
this.recipeFirstSub?.unsubscribe;
this.recipeSecondSub?.unsubscribe;
}
}
