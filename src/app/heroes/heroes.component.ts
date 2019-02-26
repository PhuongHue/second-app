import { Component, OnInit } from '@angular/core';
import {Hero} from '../models/hero'
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss','./hue_styles.scss']
})
export class HeroesComponent implements OnInit {
 hue :  Hero = {
   id : 1,
   name : "Hue"
 }
  constructor() { }

  ngOnInit() {
  }

  
}
