import { Component } from '@angular/core';

@Component({
  selector: 'app-twowaybinding',
  templateUrl: './twowaybinding.component.html',
  styleUrls: ['./twowaybinding.component.css']
})
export class TwowaybindingComponent {


  public Product:any={};
  public Count:number=1;

  public LoadProduct(url:string){
    fetch(url)
    .then(response=>response.json())
    .then(data=>{
      this.Product=data;
    })
  }

  constructor(){}

  ngOnInit():void{
    this.LoadProduct('http://fakestoreapi.com/products/1');
  }
  public NextClick(){
    this.Count++;
    this.LoadProduct(`http://fakestoreapi.com/products/${this.Count}`);
  }
  public PrevClick(){
    this.Count--;
    this.LoadProduct(`http://fakestoreapi.com/products/${this.Count}`);
  }

}
