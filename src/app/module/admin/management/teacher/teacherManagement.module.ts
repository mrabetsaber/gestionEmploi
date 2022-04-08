import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeacherManagementRoutingModule } from './teacherManagment-routing.module';
import { TeacherManagementDashboardComponent } from './teacher-management-dashboard/teacher-management-dashboard.component';
import { HeaderComponent } from './header/header.component';
import { UpdateTeacherComponent } from './update-teacher/update-teacher.component';
import { AddTeacherComponent } from './add-teacher/add-teacher.component';
import { TeacherListComponent } from './teacher-list/teacher-list.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TeacherManagementDashboardComponent,
    HeaderComponent,
    UpdateTeacherComponent,
    AddTeacherComponent,
    TeacherListComponent,
  ],
  imports: [
    CommonModule,
    TeacherManagementRoutingModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule
    
  ]
})
export class TeacherManagementModule { }
