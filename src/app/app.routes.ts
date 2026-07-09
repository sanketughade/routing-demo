import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard-component/dashboard-component';
import { PageNotFoundComponent } from './components/page-not-found-component/page-not-found-component';
import { EmployeeDetails } from './components/employee-details/employee-details';
import { ProjectDetailsComponent } from './components/employee-details/project-details-component/project-details-component';
import { employeeResolver } from './resolvers/employee-details.resolver';
import { settingCanActivate } from './guards/settings-can-activate.guard';
import { EditEmployeeDetails } from './components/employee-details/edit-employee-details/edit-employee-details';
import { editEmployeeDeactivateGraud } from './guards/edit-employee-deactivate.guard';
import { UserDashboardComponent } from './components/user-dashboard-component/user-dashboard-component';
import { adminDashboardCanMatch } from './guards/admin-dashboard-can-match.guard';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        component: DashboardComponent,
        data: {
            title: 'Dashboard'
        },
        canMatch: [adminDashboardCanMatch]
    },
    {
        path: 'dashboard',
        component: UserDashboardComponent
    },
    {
        path: 'employees',
        loadComponent: () => import('./components/employees-component/employees-component')
            .then(m => m.EmployeesComponent),
        data: {
            title: 'Employees'
        }
    },
    {
        path: 'employees/:id',
        component: EmployeeDetails,
        resolve: {
            employee: employeeResolver
        },
        data: {
            employeeTitle: 'Employee Details',
            employeeRole: 'Manager'
        },
        children: [
            {
                path: 'projects',
                component: ProjectDetailsComponent
            },
            {
                path: 'edit',
                component: EditEmployeeDetails,
                canDeactivate: [editEmployeeDeactivateGraud]
            }
        ]
    },
    {
        path: 'projects',
        loadComponent: () => import('./components/projects-component/projects-component')
            .then(m => m.ProjectsComponent),
        data: {
            title: 'Projects'
        }
    },
    {
        path: 'settings',
        loadComponent: () => import('./components/settings-component/settings-component')
            .then(m => m.SettingsComponent),
        data: {
            title: 'Settings'
        },
        canActivate: [
            settingCanActivate
        ]
    },
    {
        path: '**',
        component: PageNotFoundComponent,
        data: {
            title: 'Page Not Found'
        }
    }
];
