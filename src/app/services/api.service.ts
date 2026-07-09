import { inject, Injectable } from "@angular/core";
import { delay, Observable, take } from "rxjs";
import { Employee } from "../models/employee.model";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    httpClient = inject(HttpClient);

    private readonly baseUrl = 'https://jsonplaceholder.typicode.com';

    getEmployees(): Observable<Employee[]> {
        return this.httpClient.get<Employee[]>(`${this.baseUrl}/users`);
    }

    getEmployee(employeeId: number): Observable<Employee> {
        return this.httpClient.get<Employee>(`${this.baseUrl}/users/${employeeId}`);
    }

    getIsLoggedIn(): boolean {
        return false;
    }

    getIsAdmin(): boolean {
        return true;
    }
}