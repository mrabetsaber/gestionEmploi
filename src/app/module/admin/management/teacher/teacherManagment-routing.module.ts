import { UpdateTeacherComponent } from './update-teacher/update-teacher.component';
import { AddTeacherComponent } from './add-teacher/add-teacher.component';
import { TeacherListComponent } from './teacher-list/teacher-list.component';
import { TeacherManagementDashboardComponent } from './teacher-management-dashboard/teacher-management-dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {  path: 'teacherList',
  component: TeacherManagementDashboardComponent,
  children: [

  { path: '', component: TeacherListComponent},
  { path: 'addTeacher', component: AddTeacherComponent },
  { path: 'updateTeacher/:id', component: UpdateTeacherComponent},]
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeacherManagementRoutingModule { }
