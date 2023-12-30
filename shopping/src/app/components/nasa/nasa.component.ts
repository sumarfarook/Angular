import { Component } from '@angular/core';

@Component({
  selector: 'app-nasa',
  templateUrl: './nasa.component.html',
  styleUrls: ['./nasa.component.css']
})
export class NasaComponent {

public mars:any={};

public LoadPhotos(){
  fetch("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY")
  .then(response=>response.json())
  .then(data=>{
  this.mars=data;
  })
}


  constructor(){}
  ngOnInit():void{

    this.LoadPhotos();
  }

}
