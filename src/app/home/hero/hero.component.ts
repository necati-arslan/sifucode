import { Component, OnInit } from '@angular/core';
declare var particlesJS: any;

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})



export class HeroComponent implements OnInit {

  
  constructor() { }

  ngOnInit() {
    particlesJS.load('particles-js', 'assets/data/particles.json', ()=> { console.log('callback - particles.js config loaded'); });
  } 

  scroll(elementName){
    let element=document.getElementById(elementName);
    if (element) element.scrollIntoView({ block: 'start',  behavior: 'smooth' })
  }

}
