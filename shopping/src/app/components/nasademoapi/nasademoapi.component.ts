import { Component, OnInit } from '@angular/core';
import { NasaapiService } from '../../services/nasaapi.service';
@Component({
  selector: 'app-nasademoapi',
  templateUrl: './nasademoapi.component.html',
  styleUrls: ['./nasademoapi.component.css']
})
export class NasademoapiComponent implements OnInit {

public Rover:any|null=null;
  constructor(private photo:NasaapiService){}

  ngOnInit(): void {
    this.photo.MarseRover().subscribe(data=>this.Rover=data);
  }
}
