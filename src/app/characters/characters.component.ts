import { Component, OnInit } from '@angular/core';
import { PotterService} from '../potter.service';


@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {
characters: [];
  constructor(private potterService:PotterService) { }

  ngOnInit() {
    this.showCharacters();
  }

  showCharacters(){
    this.potterService.getCharacters().subscribe(characters => this.characters=characters);
  }

}
