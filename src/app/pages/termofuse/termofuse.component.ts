import { Component } from '@angular/core';

@Component({
  selector: 'app-termofuse',
  templateUrl: './termofuse.component.html',
  styleUrls: ['./termofuse.component.css']
})
export class TermofuseComponent {
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
  print() {
    window.print();
  }
}
