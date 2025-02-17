import { AsyncPipe, DatePipe, JsonPipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { interval, map, Observable } from 'rxjs';
import { NaPipe } from '../CustomPipe/na.pipe';

@Component({
  selector: 'app-pipe',
  standalone: true,
  imports: [DatePipe,UpperCasePipe,LowerCasePipe,TitleCasePipe,JsonPipe,AsyncPipe,NaPipe],
  templateUrl: './pipe.component.html',
  styleUrl: './pipe.component.css'
})
export class PipeComponent {

  firstName: string = "Zubair is one and only";

  currentTime: Observable<Date> = new Observable<Date>;

  currentDate: Date = new Date();
  

  student: any = {
    name: "Zubair",
    age: 23,
    city: "mitru",
    state: ''
  };

  constructor() {
    this.currentTime = interval(1000).pipe(map(() => new Date()))
  }

}

