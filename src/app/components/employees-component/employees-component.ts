import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Employee } from '../../models/employee.model';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-employees-component',
  imports: [RouterLink],
  standalone: true,
  templateUrl: './employees-component.html',
  styleUrl: './employees-component.css',
})
export class EmployeesComponent implements OnInit {
  private apiService = inject(ApiService);
  private router = inject(Router);
  private activatedRoute = inject(ActivatedRoute);

  employees = signal<Employee[]>([]);
  searchText = signal<string>('');
  selectedCity = signal<string>('');
  selectedCompany = signal<string>('');

  readonly cities = [
    'Gwenborough',
    'Wisokyburgh',
    'McKenziehaven',
    'South Elvis',
    'Roscoeview',
    'South Christy',
    'Howemouth',
    'Aliyaview',
    'Bartholomebury',
    'Lebsackbury'
  ];

  readonly companies = [
    'Romaguera-Crona',
    'Deckow-Crist',
    'Romaguera-Jacobson',
    'Robel-Corkery',
    'Keebler LLC',
    'Considine-Lockman',
    'Johns Group',
    'Abernathy Group',
    'Yost and Sons',
    'Hoeger LLC'
  ];

  ngOnInit(): void {
    this.apiService.getEmployees()
      .subscribe(employees => {
        this.employees.set(employees);
      });

      this.activatedRoute.queryParamMap.subscribe(queryParamMap => {
        const city = queryParamMap.get('city');
        const company = queryParamMap.get('company');
        const search = queryParamMap.get('search');

        if (city) {
          this.selectedCity.set(city);
          console.log(city);
        }

        if (company) {
          this.selectedCompany.set(company);
          console.log(company);
        }

        if (search) {
          this.searchText.set(search);
          console.log(search);
        }

        //After getting all the query params, make a API call to get filtered employees. Won't implement it as JSONPlaceholder doesnt support it
      })
  }

  onFilterChange(
    key: 'city'| 'company',
    event: Event
  ) {
    const value = (event.target as HTMLSelectElement).value;

    this.router.navigate(['/employees'], {
      queryParams: {
        [key]: value || null
      },
      queryParamsHandling: 'merge'
    });
  }

  onSearch(event: Event) {
    const search = (event.target as HTMLInputElement).value;

    this.router.navigate([], {
      relativeTo: this.activatedRoute,
      queryParams: {
        search: search || null
      },
      queryParamsHandling: 'merge'
    });
  }
}
