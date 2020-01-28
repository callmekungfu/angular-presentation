import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface IUser {
  id: number;
  isActive: boolean;
  name: Name;
  company: string;
  email: string;
  phone: string;
  address: string;
  about: string;
  tags: string[];
  range: number[];
  friends: Friend[];
  greeting: string;
  favoriteFruit: string;
}

export interface Friend {
  id: number;
  name: string;
}

export interface Name {
  first: string;
  last: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-optimization';
  users: IUser[];

  constructor(private http: HttpClient) {}

  async ngOnInit(): Promise<void> {
    const resp = await this.fetchData();
    this.users = resp as IUser[];
  }

  doSomething() {
    console.log('clicked');
  }

  async fetchData() {
    return await this.http
      .get('https://next.json-generator.com/api/json/get/EJV-McF-u')
      .toPromise();
  }
}
