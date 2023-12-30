import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {ScrollingModule} from '@angular/cdk/scrolling';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



import { AppComponent } from './app.component';
import { HomeComponent } from './components/home.component';
import { LoginComponent } from './components/login/login.component';
import { NetflixindexComponent } from './netflix/netflixindex/netflixindex.component';
import { NetflixheaderComponent } from './netflix/netflixheader/netflixheader.component';
import { NetflixmainComponent } from './netflix/netflixmain/netflixmain.component';
import { NetflixregisterComponent } from './netflix/netflixregister/netflixregister.component';
import { DatabindingComponent } from './components/databinding/databinding.component';
import { TwowaybindingComponent } from './components/twowaybinding/twowaybinding.component';
import { TwodataComponent } from './components/twodata/twodata.component';
import { MvvmComponent } from './components/mvvm/mvvm.component';
import { DataformComponent } from './components/dataform/dataform.component';
import { IfdemoComponent } from './components/ifdemo/ifdemo.component';
import { IfthenelseComponent } from './components/ifthenelse/ifthenelse.component';
import { ContentprojectionComponent } from './components/contentprojection/contentprojection.component';
import { NgswitchComponent } from './components/ngswitch/ngswitch.component';
import { FordemoComponent } from './components/fordemo/fordemo.component';
import { NasaComponent } from './components/nasa/nasa.component';
import { NasacardComponent } from './components/nasacard/nasacard.component';
import { NgfornestedComponent } from './components/ngfornested/ngfornested.component';
import { NgforComponent } from './components/ngfor/ngfor.component';
import { ForpropertyComponent } from './components/forproperty/forproperty.component';
import { ClassbindingComponent } from './components/classbinding/classbinding.component';
import { StyledemoComponent } from './components/styledemo/styledemo.component';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';
import { MeterialdemoComponent } from './components/meterialdemo/meterialdemo.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CdkComponent } from './components/cdk/cdk.component';
import { OtpComponent } from './components/otp/otp.component';
import { CaptchaService } from './services/captcha.service';
import { DataComponent } from './components/data/data.component';
import { ApidataService } from './services/apidata.service';
import { HttpClientModule } from '@angular/common/http';
import { OneparentComponent } from './components/oneparent/oneparent.component';
import { OnechildComponent } from './components/onechild/onechild.component';
import { NasadataComponent } from './components/nasadata/nasadata.component';
import { NasademoapiComponent } from './components/nasademoapi/nasademoapi.component';
import { TemplateformComponent } from './components/templateform/templateform.component';
import { FormvalidationComponent } from './templatedrivenforms/formvalidation/formvalidation.component';
import { InputvalidationComponent } from './templatedrivenforms/inputvalidation/inputvalidation.component';
import { InputvalidationserviceComponent } from './templatedrivenforms/inputvalidationservice/inputvalidationservice.component';
import { ReactiveformdemoComponent } from './reactiveforms/reactiveformdemo/reactiveformdemo.component';
import { ReactiveformComponent } from './reactiveforms/reactiveform/reactiveform.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    NetflixindexComponent,
    NetflixheaderComponent,
    NetflixmainComponent,
    NetflixregisterComponent,
    DatabindingComponent,
    TwowaybindingComponent,
    TwodataComponent,
    MvvmComponent,
    DataformComponent,
    IfdemoComponent,
    IfthenelseComponent,
    ContentprojectionComponent,
    NgswitchComponent,
    FordemoComponent,
    NasaComponent,
    NasacardComponent,
    NgfornestedComponent,
    NgforComponent,
    ForpropertyComponent,
    ClassbindingComponent,
    StyledemoComponent,
    ParentComponent,
    ChildComponent,
    MeterialdemoComponent,
    CdkComponent,
    OtpComponent,
    DataComponent,
    OneparentComponent,
    OnechildComponent,
    NasadataComponent,
    NasademoapiComponent,
    TemplateformComponent,
    FormvalidationComponent,
    InputvalidationComponent,
    InputvalidationserviceComponent,
    ReactiveformdemoComponent,
    ReactiveformComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCardModule,
    MatButtonModule,
    MatDividerModule,
    MatProgressBarModule,
    ScrollingModule,
    HttpClientModule 
    
  ],
  providers: [ApidataService,
    CaptchaService
  ],
  bootstrap: [ReactiveformComponent]
})
export class AppModule { }
