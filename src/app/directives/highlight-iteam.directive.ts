import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlightIteam]',
  standalone: true
})
export class HighlightIteamDirective {

  //اللي حاطط عليه الديركتف  هستقبله واطبق عليه اللي عيزاه
  constructor(private ele:ElementRef) { 
  //  this.ele.nativeElement.style.backgroundColor="#FFB6C1"

  }
  @HostListener('mouseover') over() {
    this.ele.nativeElement.style.boxShadow = ' 10px 10px 5px #aaaaaa';
  }

  
  @HostListener('mouseout') out() {
    this.ele.nativeElement.style.boxShadow = 'none';
  }
}
