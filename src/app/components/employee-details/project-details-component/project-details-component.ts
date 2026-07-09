import { Component } from '@angular/core';

@Component({
  selector: 'app-project-details-component',
  imports: [],
  templateUrl: './project-details-component.html',
  styleUrl: './project-details-component.css',
})
export class ProjectDetailsComponent {
  projects = [
  {
    id: 1,
    name: 'Employee Management System',
    description: 'Angular 20 application for managing employees.',
    completed: true
  },
  {
    id: 2,
    name: 'CRM Portal',
    description: 'Customer relationship management dashboard.',
    completed: false
  },
  {
    id: 3,
    name: 'Leave Management',
    description: 'Track employee leave requests and approvals.',
    completed: false
  },
  {
    id: 4,
    name: 'Performance Review',
    description: 'Annual employee performance evaluation system.',
    completed: true
  }
];
}
