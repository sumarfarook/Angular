import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-forproperty',
  templateUrl: './forproperty.component.html',
  styleUrls: ['./forproperty.component.css']
})
export class ForpropertyComponent {
  public products:any[]=[
  {Name:"Samsung TV",Price:35000.42},
  {Name:"NikeCasuals",Price:4500.99}
  ];

  constructor(){}

  ngOnInit():void{

  }
  public SubmitProduct(obj:any){
    this.products.push(obj);
    alert("Products added to list");
  }

  public DeleteClick(i:number){
    let flag=confirm("Are you sure want to Delete ?");
    if(flag==true){
      this.products.splice(i,1);
    }

  }

}
