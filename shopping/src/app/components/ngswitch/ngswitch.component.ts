import { Component,OnInit} from '@angular/core';

@Component({
  selector: 'app-ngswitch',
  templateUrl: './ngswitch.component.html',
  styleUrls: ['./ngswitch.component.css']
})
export class NgswitchComponent {

  public ViewName:string='A';

  constructor(){}
  ngOnInit():void{

  }
  DisplayView(e:any){
    this.ViewName=e.target.name;
  }
}
