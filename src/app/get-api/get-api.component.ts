import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-get-api',
  imports: [],
  templateUrl: './get-api.component.html',
  styleUrl: './get-api.component.css'
})
export class GetApiComponent {
   listUser: any[] = [];
  constructor(private http: HttpClient){

  }

  getAllCustomers(){
    debugger;
    this.http.get("https://jsonplaceholder.typicode.com/users").subscribe((result:any)=>{
      debugger;
      this.listUser = result;
    } )
  }
            
}
