import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-container',
  imports: [CommonModule],
  templateUrl: './container.component.html',
  styleUrl: './container.component.css'
})
export class ContainerComponent {
  isContainer: boolean = true;

  http=inject(HttpClient);
  userList: any[] = [];

  getUser() { 
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe((res:any) => {
      this.userList = res;
    })
   }
}