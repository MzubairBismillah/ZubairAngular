import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  standalone: true,
  imports: [ReactiveFormsModule,JsonPipe],
  templateUrl: './reactive.component.html',
  styleUrl: './reactive.component.css'
})
export class ReactiveComponent {

  studentForm: FormGroup = new FormGroup( {
    firstName:   new FormControl(),
    lastName:   new FormControl(),
    userName:   new FormControl(),
    city:  new FormControl(),
    state:  new FormControl(),
    zipCode:   new FormControl(),
    isAcceptTerms:  new FormControl(),

});
    
formValues: any;
OnSave() {
  this.formValues = this.studentForm.value;
}
}