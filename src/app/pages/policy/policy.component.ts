import { Component } from '@angular/core';

@Component({
  selector: 'app-policy',
  templateUrl: './policy.component.html',
  styleUrls: ['./policy.component.css']
})
export class PolicyComponent {

  constructor() { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }
  scrolll(data: any) {
    console.log(data)
    var element = document.getElementById(data)?.getBoundingClientRect().top
    var headerOffset = 145;
    var offsetPosition = element! + window.pageYOffset - headerOffset;
    window.scrollTo({ top: offsetPosition, behavior: "smooth" });
  }

  scrollToTop(el: HTMLElement) {
    el.scrollIntoView({block: "center", inline: "nearest", behavior: "smooth"});
}

  print() {
    window.print();
  }


}
