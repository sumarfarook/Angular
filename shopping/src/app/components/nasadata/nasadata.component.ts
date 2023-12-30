import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
@Component({
  selector: 'app-nasadata',
  templateUrl: './nasadata.component.html',
  styleUrls: ['./nasadata.component.css']
})
export class NasadataComponent implements OnInit {
public Products:any[]=[];
public Categories:any|null=null;
public CartAdd:any[]=[];
public CartCount:number=0;

public GetCartCount(){
  this.CartCount=this.CartAdd.length;
}

  constructor(private api:ApiService){}

  ngOnInit(): void {
    this.api.CategoriesDetails().subscribe(data=>this.Categories=data);
  
    this.api.ProductsDetails().subscribe(data=>this.Products=data);

   
  }
  public AddToCartClick(id:number){
    fetch(`http://fakestoreapi.com/products/${id}`)
    .then(response=>response.json())
    .then(data=>{
      this.CartAdd.push(data);
      alert(data.title + "Add to Cart");
      this.GetCartCount();
    })

  }

  public CategoryChanged(e:any){

  }
  
}
