import { Component } from '@angular/core';

@Component({
  selector: 'app-dataform',
  templateUrl: './dataform.component.html',
  styleUrls: ['./dataform.component.css']
})
export class DataformComponent {

  RegisterClick(data:any){
    alert(JSON.stringify(data));
  }

}
