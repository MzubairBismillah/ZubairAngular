import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-for',
  imports: [FormsModule],
  templateUrl: './for.component.html',
  styleUrl: './for.component.css'
})
export class ForComponent {
  dayNumber: string = ''
  dayName: string = ''
  cityArray: string[] = ['lahore','thingi','vehari','mitru']


  StudentList: any[] = [
    { name: 'AAA', city: 'Pune', isActive: false, gender: 'male', mark: 23 },
    { name: 'BBB', city: 'Mumbai',isActive: false, gender: 'female', mark: 33 },
    { name: 'CC', city: 'Jalgao', isActive: false, gender: 'male', mark: 67 },
    { name: 'DD', city: 'Mumbai', isActive: true, gender: 'female', mark: 96 },
    { name: 'EE', city: 'Nagpur', isActive: false, gender: 'male', mark: 0 },
    { name: 'FFF', city: 'Thane', isActive: false, gender: 'male', mark: 50 }
  ];
}



