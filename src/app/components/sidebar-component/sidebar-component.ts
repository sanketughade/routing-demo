import { Component } from '@angular/core';
import { RouterLink, RouterOutlet, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-sidebar-component',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './sidebar-component.html',
  styleUrl: './sidebar-component.css',
})
export class SidebarComponent {
  navigationItems = [
    {
      icon: '🏠',
      label: 'Dashboard',
      route: '/dashboard'
    },
    {
      icon: '👥',
      label: 'Employees',
      route: '/employees'
    },
    {
      icon: '📁',
      label: 'Projects',
      route: '/projects'
    },
    {
      icon: '⚙️',
      label: 'Settings',
      route: '/settings'
    }
  ];
}
