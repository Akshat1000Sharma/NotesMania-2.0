import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  myForm!: FormGroup;
  constructor(private fb: FormBuilder, private router: Router){

  }
  onSubmit() {
    // Handle form submission here
    // const formValues = this.myForm.value;
    const url = `/home`;
    this.router.navigate([url]);
  }
}
