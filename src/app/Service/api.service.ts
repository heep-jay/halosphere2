import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'https://halogen-live.onrender.com';

  constructor(private http: HttpClient) {}

  getClientFacing() {
    return this.http
      .get(`${this.apiUrl}/api/halosphere-client-facings?populate=*`)
      .pipe(
        map((res: any) => {
          return res.data;
        })
      );
  }
}
