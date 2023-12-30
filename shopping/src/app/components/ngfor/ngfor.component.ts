import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.css']
})
export class NgforComponent {

public categories:string[]=[];
public products:any[]=[];
public cartItems:any[]=[];
public cartCount:number=0;

public GetCartCount(){
  this.cartCount=this.cartItems.length;
}


  public LoadProducts(url:any){
  fetch(url)
  .then(response=>response.json())
  .then(data=>{
  this.products=data;
  })
}
public LoadCategories(){
  fetch("http://fakestoreapi.com/products/categories")
  .then(response=>response.json())
  .then(data=>{
    this.categories=data;
    data.unshift("all")
  })
}

  constructor(){}

  ngOnInit():void{
    this.LoadCategories();
    this.LoadProducts("http://fakestoreapi.com/products");

  }

  public CategoryChange(e:any){
    if(e.target.value=="all"){
      this.LoadProducts('http://fakestoreapi.com/products');
    }else{
      this.LoadProducts(`http://fakestoreapi.com/products/category/${e.target.value}`);
    }

  }
  public AddToCartClick(id:number){
    fetch(`http://fakestoreapi.com/products/${id}`)
    .then(response=>response.json())
    .then(data=>{
      this.cartItems.push(data);
      alert(data.title +"Add to cart");
      this.GetCartCount();

    })

  }

}
