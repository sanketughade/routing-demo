import { Component } from '@angular/core';
import { DashboardStatistics } from './dashboard-statistics/dashboard-statistics';
import { DashboardCharts } from './dashboard-charts/dashboard-charts';
import { DashboardReports } from './dashboard-reports/dashboard-reports';

@Component({
  selector: 'app-dashboard-component',
  imports: [DashboardStatistics, DashboardCharts, DashboardReports],
  templateUrl: './dashboard-component.html',
  styleUrl: './dashboard-component.css',
})
export class DashboardComponent {}
