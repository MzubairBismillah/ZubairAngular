import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

declare var alert: any;

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  userObject: any = {
    emailId: "",
    password: ""
  };
  
   router = inject(Router);
   http = inject(HttpClient);

   onLogin() {
    this.http.post("https://projectapi.gerasim.in/api/UserApp/login", this.userObject).subscribe((res: any) => {
    if(res.result) {
      alert("Login Successful");
      localStorage.setItem("LoginUser", JSON.stringify(res.data));
      this.router.navigateByUrl('layout');
    }
    else {
      alert("Login Failed");
    }
    
    });
  }
}