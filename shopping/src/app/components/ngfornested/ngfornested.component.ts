import { Component } from '@angular/core';

@Component({
  selector: 'app-ngfornested',
  templateUrl: './ngfornested.component.html',
  styleUrls: ['./ngfornested.component.css']
})
export class NgfornestedComponent {
public menu:any=[
  {Category:"Electronics",Products:["Samsung Tv","Mobile"]},
  {Category:"Footware",Products:["NikeCasuals","WoodLand"]}
];
public topics:any=[
  {Title:"HTML",Defination:"Html is markup language"},
  {Title:"CSS",Defination:"Css configures styles for HTML"}
];

  constructor(){}

  ngOnInit():void{

  }

}
