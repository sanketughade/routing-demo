import { Component } from '@angular/core';
import { SidebarComponent } from '../sidebar-component/sidebar-component';
import { HeaderComponent } from '../header-component/header-component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout-component',
  imports: [RouterOutlet, SidebarComponent, HeaderComponent],
  templateUrl: './layout-component.html',
  styleUrl: './layout-component.css',
})
export class LayoutComponent {}
