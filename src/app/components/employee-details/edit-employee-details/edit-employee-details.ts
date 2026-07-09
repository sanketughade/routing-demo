import { Component, viewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-edit-employee-details',
  imports: [FormsModule, RouterLink],
  templateUrl: './edit-employee-details.html',
  styleUrl: './edit-employee-details.css',
})
export class EditEmployeeDetails {
  form = viewChild<NgForm>('form');
  
  employee = { firstName: '', lastName: '', email: '', phone: '', company: '' };

  onSubmit(form: NgForm) {
    console.log(form);
  }
}
