import { StudentManagementDashboardComponent } from './student-management-dashboard/student-management-dashboard.component';
import { UpdateStudentComponent } from './update-student/update-student.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { StudentListComponent } from './student-list/student-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {  path: 'studentList',
  component: StudentManagementDashboardComponent,
  children: [

  { path: '', component: StudentListComponent},
  { path: 'addStudent', component: AddStudentComponent },
  { path: 'updateStudent/:id', component: UpdateStudentComponent },]
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentManagementRoutingModule { }
