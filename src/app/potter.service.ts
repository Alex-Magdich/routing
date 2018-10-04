import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PotterService {

  constructor(private http:HttpClient) { }
  
  getCharacters(){
    return this.http.get('https://www.potterapi.com/v1/characters?house=Hufflepuff&key=$2a$10$BD8PoevCo5yISOJlHy47geFYut1/qYjjtKHLQeHW2ZUD.3RndOJXa');
  }
}
