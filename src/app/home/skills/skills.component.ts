import { Component, OnInit, HostListener } from '@angular/core';
import * as AOS from 'aos';
import * as $ from 'jquery';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  
  // @HostListener('window:scroll', ['$event'])
  // checkScroll() {
  //   let skills=document.getElementById('skills');
  //   let skillsOffsetTop= skills.offsetTop;
  //   let height=window.innerHeight;

  //   let skillbar = document.getElementsByClassName('skillbar');

  //   Array.from(skillbar).forEach(function(element) {
  //     console.log(element)
  //   });

  //   console.log('skillbar',skillbar)

  //   console.log('height',height)

  //   let offset = window.pageYOffset ;

  //   if(offset + height >skillsOffsetTop){
  //     console.log('biget than')

  //   }


  //   console.log('skills',skillsOffsetTop);
    
  //   console.log('offset',offset);

  // }


  constructor() { }

  ngOnInit(): void {
    AOS.init();

    let offsetTop = $('#skills').offset().top;
  	$(window).scroll(function() {
       let height = $(window).height();
       console.log('height',height)
          if($(window).scrollTop()+height > offsetTop) {
                $('.skillbar').each(function(){ 
                  $(this).find('.skillbar-bar').animate({
                    width:$(this).attr('data-percent')
                  },2000);
                });
                }
             });

  }

}
  