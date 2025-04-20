import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { Router } from '@angular/router';

export const authenticationGuard: CanActivateFn = (route, state) => {
 debugger;
  // Check if the user is logged in
  const router = inject(Router);
  const loggedUser = localStorage.getItem("LoginUser");
  if (loggedUser != null) {
    return true;
  }else {
    router.navigateByUrl('Login');
    return false;
  }
};
