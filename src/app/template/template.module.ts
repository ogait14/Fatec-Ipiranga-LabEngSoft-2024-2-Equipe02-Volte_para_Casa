import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { ResponsiveSideBarComponent } from './responsive-side-bar/responsive-side-bar.component';


@NgModule({
  declarations: [
    NavbarComponent,
    SidebarComponent,
    ResponsiveSideBarComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NavbarComponent,
    SidebarComponent,
    ResponsiveSideBarComponent
  ]
})
export class TemplateModule { }
