import { Component, OnInit,Input, Output, EventEmitter} from '@angular/core';
import { Event } from '@angular/router';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

@Input() public  MessageFromParent:string=""; 
@Input() public ProductMessage:any={};

  ngOnInit():void{

  }
  
}
