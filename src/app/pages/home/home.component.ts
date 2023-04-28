import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  clickRollsafe(){
    window.open('https://mobility.halobizapps.com/', '_blank');
  }
  clickContract(){
    window.open('https://halobiz-contract-mgmt.web.app', '_blank');

  }
}
