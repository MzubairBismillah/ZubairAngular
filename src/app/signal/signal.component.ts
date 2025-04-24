import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-signal',
  imports: [],
  templateUrl: './signal.component.html',
  styleUrl: './signal.component.css'
})
export class SignalComponent {


  LanguageName = signal('angular');
  firstName = signal('Zubair');
  lastName = signal('Bismillah');
  fullName = computed(() =>  this.firstName() + ' ' + this.lastName());

//Array
  City = signal(['Mitru','Vehari']);

  //Object
  StudentObj = signal({
    firstName: 'Zubair',
    lastName: 'Bismillah',
    age: 25,
    city: 'Vehari'
  });


  constructor() {
    const name = this.firstName(); // 'angular'
    setTimeout(() => {
      this.LanguageName.set('React');
    }
    , 2000);
 
}
  
  changeLanguage() {
    this.LanguageName.set('React');
  }
changeName() {
  this.firstName.set('Ghulam');
}
changeLastName() {
  this.lastName.set('chaudary');
}
changeCity() {
  this.City.set([...this.City(), 'Islamabad']);
}
changeStudentObj() {
  this.StudentObj.set({ ...this.StudentObj(), city: 'Mitru' });
}
}