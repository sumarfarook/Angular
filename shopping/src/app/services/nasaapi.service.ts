import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable}  from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class NasaapiService {

  constructor(private nasa:HttpClient) { }

  MarseRover():Observable<any | null>{
    return this.nasa.get<any | null>('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY');

  }
}
