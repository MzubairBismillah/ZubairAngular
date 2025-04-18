import { Component,inject} from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { EmployeeListComponent } from '../employee-list/employee-list.component';



@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

  router = inject(Router);
  logOff() {
    localStorage.removeItem("LoginUser");
    this.router.navigateByUrl('/Login');
  }

}
