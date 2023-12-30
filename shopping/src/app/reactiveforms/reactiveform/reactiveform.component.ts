import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {

constructor(private fb:FormBuilder){}

ngOnInit(): void {
  
}
  public frmRegister=this.fb.group({
    Name:this.fb.control(''),
    Age:this.fb.control(0),
    frmAddress:this.fb.group({
      City:this.fb.control('Hyd'),
      Pin:this.fb.control('')
    })
  })

  get City(){
    return this.frmRegister.controls.frmAddress.controls.City;
  }
  get Pin(){
    return this.frmRegister.controls.frmAddress.controls.Pin;
  }
  public SubmitClicked(obj:any){
    alert(JSON.stringify(obj));

  }
  public UpdateClicked(){
    this.frmRegister.patchValue({
      Age:26,
      frmAddress:{
        Pin:'500010'
      }
    })
  }
}
