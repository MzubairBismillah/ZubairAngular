import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule,],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  userObject: any = {
    userName: "",
    password: ""
  };
   router = inject(Router);

  onLogin() {
    if (this.userObject.userName == "admin" && this.userObject.password == "1234") {
      alert("Login Successful");
      localStorage.setItem("LoginUser", this.userObject.userName);
      this.router.navigateByUrl('layout');
    }
    else {
      alert("Login Failed");
    }
  }
}