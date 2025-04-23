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

    debugger;
    
    this.http.get("https://jsonplaceholder.typicode.com/users").subscribe((res: any) => {
      if (res) {
        alert("Data fetched successfully");
        this.listUser = res;
      } else {                              
        alert("Data not fetched successfully");
      }
    });
  }

  getAllCustomers() {

    throw new Error('Method not implemented.');
  }
}
function alert(arg0: string) {
  throw new Error('Function not implemented.');
}

