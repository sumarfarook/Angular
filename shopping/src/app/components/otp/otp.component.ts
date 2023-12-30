import { Component,OnInit } from '@angular/core';
import { CaptchaService } from '../../services/captcha.service';
@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css']
})
export class OtpComponent implements OnInit {

  constructor(private captcha:CaptchaService){}
  title="UserLogin";
  public code:string="";
  ngOnInit(): void {
    this.code=this.captcha.GenerateCode();
    
  }
  public NewCode(){
    this.code=this.captcha.GenerateCode();
  }

}
