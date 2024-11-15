import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-downloads',
  standalone: true,
  imports:[ReactiveFormsModule],
  templateUrl: './downloads.component.html',
  styleUrls: ['./downloads.component.scss']
})
export class DownloadsComponent {
  myForm!: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.myForm = this.fb.group({
      college: [''],
      year: [''],
      type: ['']
    });
  }

  onSubmit() {
    // Handle form submission here
    const formValues = this.myForm.value;
    const url = `/pdfs/${formValues.college}/${formValues.year}/${formValues.type}`;
    this.router.navigate([url]);
  }
}