import { inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";
import { ApiService } from "../services/api.service";

export const settingCanActivate: CanActivateFn = () => {
    const apiService = inject(ApiService);
    const router = inject(Router);

    if (apiService.getIsLoggedIn()) {
        return true;
    }

    return router.createUrlTree(['/dashboard']);
}