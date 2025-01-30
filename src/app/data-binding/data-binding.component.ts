import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {

  IsDivVisiable: boolean = false;
  IsDiv2visible: boolean = false;

  num1: string = '';
  num2: string = '';

  IsActive: boolean = true;
  selectedState: string ='';



  showDiv1(){
    this.IsDivVisiable = true;

  }
  hideDiv1(){
    this.IsDivVisiable = false;
  
  }
  toggleDIV2(){
    this.IsDiv2visible =!this.IsDiv2visible;
  }

  

  studentList: any[] = [
    { name: 'AAA', city: 'Pune', isActive: false, gender: 'male', mark: 23 },
    { name: 'BBB', city: 'Mumbai',isActive: false, gender: 'female', mark: 33 },
    { name: 'CC', city: 'Jalgao', isActive: false, gender: 'male', mark: 67 },
    { name: 'DD', city: 'Mumbai', isActive: true, gender: 'female', mark: 96 },
    { name: 'EE', city: 'Nagpur', isActive: false, gender: 'male', mark: 0 },
    { name: 'FFF', city: 'Thane', isActive: false, gender: 'male', mark: 50 }
  ];


}
