import { inject } from "@angular/core";
import { CanMatchFn } from "@angular/router";
import { ApiService } from "../services/api.service";

export const adminDashboardCanMatch: CanMatchFn = () => {
    const apiService = inject(ApiService);

    return apiService.getIsAdmin();
}