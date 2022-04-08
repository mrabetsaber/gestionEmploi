import { AdminDashboardComponent } from './../../components/admin-dashboard/admin-dashboard.component';
import { AdminManagementDashboardComponent } from './admin-management-dashboard/admin-management-dashboard.component';
import { UpdateAdminComponent } from './update-admin/update-admin.component';
import { AddAdminComponent } from './add-admin/add-admin.component';
import { AdminListComponent } from './admin-list/admin-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {  path: 'adminList',
      component: AdminManagementDashboardComponent,
      children: [

      {path: '', component: AdminListComponent},
    { path: 'addAdmin', component: AddAdminComponent },
      { path: 'updateAdmin/:id', component: UpdateAdminComponent },]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
