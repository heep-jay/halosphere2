import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ApiService } from 'src/app/Service/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class HomeComponent {
  constructor(public dialog: MatDialog, private api: ApiService) {}

  clientFacing: any = [];
  filteredItems: any[] = [];
  searchTerm: string = '';

  ngOnInit(): void {
    this.api.getClientFacing().subscribe((data: any) => {
      this.clientFacing = data;
      this.filteredItems = [...this.clientFacing];
      console.log(data);
    });
  }

  fireWeb(url: string) {
    if (url !== 'null') {
      window.open(url, '_blank');
    }
    return null;
  }

  fire(url: string, popup: any) {
    if (url !== 'null') {
      window.open(url, '_blank');
    } else {
      this.openDialog(popup);
    }
  }

  onSearch(): void {
    this.filteredItems = this.clientFacing.filter((data: any) =>
      data.attributes.productName
        .toLowerCase()
        .includes(this.searchTerm.toLowerCase())
    );
  }

  openDialog(content: any) {
    this.dialog.open(content);
  }
}
