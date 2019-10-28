import { Component, ViewChild } from '@angular/core';
import { HttpClient, HttpEvent } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'data-mocks-demo';
  httpResponse = '';

  constructor(private _http: HttpClient) {

  }

  login() {
    this.httpResponse = 'Loading...';
    this._http
      .get<any>('https://localhost:9100/login', {observe: 'response'})
      .subscribe((result: any, ) => {
        this.httpResponse = JSON.stringify(result, null, 2);
      });
  }

  getUser(name: string) {
    this.httpResponse = 'Loading...';
    this._http
      .get<any>('https://localhost:9100/users/' + name, {observe: 'response'})
      .subscribe((result: any, ) => {
        this.httpResponse = JSON.stringify(result, null, 2);
      },
      (result: any) => {
        this.httpResponse = JSON.stringify(result, null, 2);
      });
  }
}
