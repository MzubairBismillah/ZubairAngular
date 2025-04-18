import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-container',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './container.component.html',
  styleUrl: './container.component.css'
})
export class ContainerComponent {
  isContainer: boolean = true;
  isApi: boolean = false;

  http=inject(HttpClient);
  userList: any[] = [];

  getUser() {
    this.isApi = true; 
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe((res:any) => {
      this.userList = res;
      this.isApi = false;
    })
   }
}