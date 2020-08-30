import { Component, OnInit, ElementRef, HostListener, Renderer2 } from '@angular/core';
import {NavigateService} from '../navigate-service.service'
 
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  hamburgMenu:Function;

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
     console.log(window.pageYOffset >= 100);
    let header = document.querySelector(".navigation-wrapper");
   header.classList.toggle('sticky', window.pageYOffset >= 100);
  }

  constructor(private navigateService:NavigateService,
    private elementRef:ElementRef,
    private renderer: Renderer2) { }

  ngOnInit() { 



  }
  ngAfterViewInit() {

  this.elementRef.nativeElement.querySelector('#hamburgMenu')
               .addEventListener('click', (e)=>{
                  e.stopPropagation();
                  this.openSideNav();
                                 });

  }

  ngOnDestroy(){

    this.hamburgMenu();

  }

  openSideNav(){
  this.navigateService.stateNavEmit(true);
  }
scroll(elementName){
  let element=document.getElementById(elementName);
  if (element) element.scrollIntoView({ block: 'start',  behavior: 'smooth' })
}
}
 