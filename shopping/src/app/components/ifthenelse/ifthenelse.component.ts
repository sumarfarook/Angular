import { Component } from '@angular/core';

@Component({
  selector: 'app-ifthenelse',
  templateUrl: './ifthenelse.component.html',
  styleUrls: ['./ifthenelse.component.css']
})
export class IfthenelseComponent {

  public Product:any={};

  constructor(){}
  ngOnInit():void{

    fetch("http://fakestoreapi.com/products/2")
    .then(response=>response.json())
    .then(data=>{
      this.Product=data;
    })

  }

}
