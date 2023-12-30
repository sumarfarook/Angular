import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-oneparent',
  templateUrl: './oneparent.component.html',
  styleUrls: ['./oneparent.component.css']
})
export class OneparentComponent implements OnInit {
public MessageFromChild:string="";
  constructor(){}
  ngOnInit(): void {
    
  }
  public GetMessage(e:string){
    this.MessageFromChild=e;
  }
}
