import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Customer } from '../Model/Class/Customer';

@Component({
  selector: 'app-get-api',
  standalone: true,
  imports: [],
  templateUrl: './get-api.component.html',
  styleUrl: './get-api.component.css'
})
export class GetApiComponent implements OnInit {
  listUser: Customer[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get("https://jsonplaceholder.typicode.com/users").subscribe((result: any) => {
      this.listUser = result;
    });
  }

  getAllCustomers() {
    throw new Error('Method not implemented.');
  }
}
