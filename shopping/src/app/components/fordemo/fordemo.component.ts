import { Component } from '@angular/core';

@Component({
  selector: 'app-fordemo',
  templateUrl: './fordemo.component.html',
  styleUrls: ['./fordemo.component.css']
})
export class FordemoComponent {
public Categories:string[]=[];
public LoadCategories(){
  fetch("http://fakestoreapi.com/products/categories")
  .then(response=>response.json())
  .then(data=>{
    this.Categories=data;
  })
}
constructor(){}

ngOnInit():void{
this.LoadCategories();

}

}
