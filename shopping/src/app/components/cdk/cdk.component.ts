import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-cdk',
  templateUrl: './cdk.component.html',
  styleUrls: ['./cdk.component.css']
})
export class CdkComponent implements OnInit {

public products:any[]=[];
constructor(){}
ngOnInit():void{

fetch('http://fakestoreapi.com/products')
.then(response=>response.json())
.then(data=>{
  this.products=data;
})
}

}
