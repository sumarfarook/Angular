import { Component } from '@angular/core';

@Component({
  selector: 'app-twodata',
  templateUrl: './twodata.component.html',
  styleUrls: ['./twodata.component.css']
})
export class TwodataComponent {

  public Product:any={
    Name:'',
    Price:0,
    Stock:false,
    City:''
  }

  constructor(){}

  ngOnInit():void{

  }

}
