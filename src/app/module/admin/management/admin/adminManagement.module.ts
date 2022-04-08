import { AddAdminComponent } from './add-admin/add-admin.component';
import { UpdateAdminComponent } from './update-admin/update-admin.component';
import { AdminListComponent } from './admin-list/admin-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './adminMangment-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { AdminManagementDashboardComponent } from './admin-management-dashboard/admin-management-dashboard.component';


@NgModule({
  declarations: [
    AdminListComponent,
    UpdateAdminComponent,
    AddAdminComponent,
    HeaderComponent,
    AdminManagementDashboardComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule

  ]
})
export class AdminManagmentModule { }
