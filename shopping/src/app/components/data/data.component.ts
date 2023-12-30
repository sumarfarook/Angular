import { Component, OnInit } from '@angular/core';
import { ApidataService } from '../../services/apidata.service';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {
  public Categories:string[]=[];
  public Products:any[]=[];

  constructor(private apidata:ApidataService){}

  ngOnInit(): void {
    this.apidata.GetCategories().subscribe(data=>this.Categories=data);
    this.apidata.GetProducts().subscribe(data=>this.Products=data);
    
  }
}
