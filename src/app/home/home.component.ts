import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';
import { Config } from '../config';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {

  config:Config;

  constructor(private configService: ConfigService) {}

  showConfig(){
    this.configService.getConfig().subscribe((data:Config) => this.config = data);
  }

  ngOnInit() {
    this.showConfig();
  }

}
