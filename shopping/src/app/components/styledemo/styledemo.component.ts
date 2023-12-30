import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-styledemo',
  templateUrl: './styledemo.component.html',
  styleUrls: ['./styledemo.component.css']
})
export class StyledemoComponent {

  constructor(){}

  ngOnInit():void{

  }
  public InsertClick(e:any,obj:any){
    document.write(`
    Button Id:${e.target.id}<br>
    Name:${e.target.name}<br>
    Class:${e.target.className}<br>
    X Position:${e.clientX}<br>
    Ctrl key:${e.ctrlKey}<br>
    Shift key:${e.shiftKey}<br>
    Product:${obj.Name}<br> ${obj.Price}
    `);
  }

}
