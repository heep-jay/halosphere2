import { Component, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class HomeComponent {
  constructor(public dialog: MatDialog) {}
  clickRollsafe() {
    window.open('https://mobility.halobizapps.com/', '_blank');
  }
  clickContract() {
    window.open('https://halobiz-contract-mgmt.web.app', '_blank');
  }

  fire(url: string) {
    window.open(url, '_blank');
  }

  openDialog(content: any) {
    this.dialog.open(content);
  }
}
