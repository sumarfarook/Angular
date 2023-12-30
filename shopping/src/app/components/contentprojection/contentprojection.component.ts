import { Component,OnInit,TemplateRef,ViewChild } from '@angular/core';

@Component({
  selector: 'app-contentprojection',
  templateUrl: './contentprojection.component.html',
  styleUrls: ['./contentprojection.component.css']
})
export class ContentprojectionComponent {

  public Product:any={};

  public buttonText:string='Preview';

  public thenBlock:TemplateRef<any>|null=null;

  @ViewChild('description',{static:true})

  public description:TemplateRef<any>|null=null;
  @ViewChild('preview',{static:true})

  public preview:TemplateRef<any>|null=null;



  public LoadProduct(){
    fetch("http://fakestoreapi.com/products/2")
    .then(response=>response.json())
    .then(data=>{
      this.Product=data;
    })
  }
  constructor(){}

  ngOnInit():void{
    this.LoadProduct();
    this.thenBlock=this.description

 }

 public ToggleClick(){
  this.buttonText=(this.buttonText=='Preview')?'Description':'Preview';
  this.thenBlock=(this.thenBlock==this.preview)?this.description:this.preview;
 }
}
