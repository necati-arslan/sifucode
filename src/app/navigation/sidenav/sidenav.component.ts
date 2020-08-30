import { Component, OnInit, AfterViewInit, ElementRef, Renderer2 } from '@angular/core';
import { NavigateService } from '../navigate-service.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  sideNavState$
  isOpen=false;

  globalListenFunc: Function;
  sidemenu:Function;
  constructor(private navigateService:NavigateService,
              private elementRef:ElementRef,
              private renderer: Renderer2) { }
 
  ngOnInit() {

    this.navigateService.stateNavEmit(false); 
    this.sideNavState$= this.navigateService.isOpen.subscribe(value=>{
      console.log(value);
      this.openNav();
    });

  }

  ngOnDestroy(){
    this.sideNavState$.unsubscribe();
    this.globalListenFunc();
    this.sidemenu();
  }

  ngAfterViewInit() {

   this.sidemenu= this.elementRef.nativeElement.querySelector('#sideMenu')
                                  .addEventListener('click', (e)=>{
                                    e.stopPropagation();
                                  });
    
                                  
    this.globalListenFunc= this.renderer.listen('document', 'click', (event) => {
    // Do something with 'event'
    console.log('dddd');
    this.closeNav();
});

  }
  
 
  
  openNav() {
     
    if(!this.isOpen){
        document.getElementById("sideMenu").style.width = "80%";
    }else{
        document.getElementById("sideMenu").style.width = "0";
    }
    this.isOpen=!this.isOpen;
}

closeNav() {

  if (!this.isOpen) return;
  document.getElementById("sideMenu").style.width = "0";
  this.isOpen=false;

}

scroll(elementName){
  let element=document.getElementById(elementName);
  if (element) element.scrollIntoView({ block: 'start',  behavior: 'smooth' })
}








}
