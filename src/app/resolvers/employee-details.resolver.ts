import { ResolveFn } from "@angular/router";
import { Employee } from "../models/employee.model";
import { inject } from "@angular/core";
import { ApiService } from "../services/api.service";

export const employeeResolver: ResolveFn<Employee> = (route) => {
    const apiService = inject(ApiService);
    const employeeId = Number(route.paramMap.get('id'));

    return apiService.getEmployee(employeeId);
}