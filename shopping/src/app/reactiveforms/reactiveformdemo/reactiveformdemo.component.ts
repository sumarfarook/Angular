import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-reactiveformdemo',
  templateUrl: './reactiveformdemo.component.html',
  styleUrls: ['./reactiveformdemo.component.css']
})
export class ReactiveformdemoComponent {


  public frmRegister=new FormGroup({
    Name:new FormControl('john'),
    Age:new FormControl(0),
    frmAddress:new FormGroup({
      City:new FormControl('Hyd'),
      Pin:new FormControl('')

    })
    
  })
  get City(){
    return this.frmRegister.controls.frmAddress.controls.City;
  }
  get Pin(){
    return this.frmRegister.controls.frmAddress.controls.Pin;
  }
}
