import { Component, inject, input, OnInit, signal } from '@angular/core';
import { ActivatedRoute, Router, RouterLink, RouterOutlet } from '@angular/router';
import { Employee } from '../../models/employee.model';
import { ApiService } from '../../services/api.service';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-employee-details',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './employee-details.html',
  styleUrl: './employee-details.css',
})
export class EmployeeDetails implements OnInit {
  private router = inject(Router);
  private activatedRoute = inject(ActivatedRoute);

  employee = input.required<Employee>();
  employeeTitle = input('');
  employeeRole = input('');
  id = input(-1);

  ngOnInit(): void {
    // this.activatedRoute.data
    //   .subscribe(data => this.employee.set(data['employee']));

    this.activatedRoute.fragment.subscribe(fragment => {
      if (fragment) {
        setTimeout(() => {
          const element = document.getElementById(fragment);
          element?.scrollIntoView({ behavior: 'smooth' });
        });
      }
    });

    // this.activatedRoute.data.subscribe(data => {
    //   this.employeeTitle.set(data['title']);
    //   this.employeeRole.set(data['role']);
    // });
  }

  get showProjects() {
    return this.router.url.endsWith('/projects');
  }

  previousEmployee() {
    this.router.navigate(['../', Number(this.id()) - 1], {
      relativeTo: this.activatedRoute
    });
  }

  nextEmployee() {
    this.router.navigate(['../', Number(this.id()) + 1], {
      relativeTo: this.activatedRoute
    });
  }

  goBack() {
    this.router.navigate(['../'], {
      relativeTo: this.activatedRoute
    });
  }
}
