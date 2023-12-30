import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
public MessageParentToChild:string="";
public PdoductDetails:any={};
constructor(){}
ngOnInit(): void {
  
}
public SendMessage(){
  this.MessageParentToChild="Hello ! I am Parent"
}

}

