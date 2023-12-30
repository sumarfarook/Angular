import { Component,OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-onechild',
  templateUrl: './onechild.component.html',
  styleUrls: ['./onechild.component.css']
})
export class OnechildComponent implements OnInit {
@Output() public ChildComponentClick:EventEmitter<string>=new EventEmitter<string>();

public msg:string="Hello ! This is Child"
  constructor(){}

  ngOnInit(): void {
    
  }
  public ButtonClick(){
    this.ChildComponentClick.emit(this.msg);
  }
}
