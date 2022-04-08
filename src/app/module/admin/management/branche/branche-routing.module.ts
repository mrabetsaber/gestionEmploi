import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBrancheComponent } from './add-branche/add-branche.component';
import { BrancheDashboardComponent } from './branche-dashboard/branche-dashboard.component';
import { BrancheListComponent } from './branche-list/branche-list.component';
import { UpdateBrancheComponent } from './update-branche/update-branche.component';

const routes: Routes = [
  {  path: 'brancheList',
  component: BrancheDashboardComponent,
  children: [

  {path: '', component: BrancheListComponent},
{ path: 'addBranche', component: AddBrancheComponent },
  { path: 'updateBranche/:id', component:UpdateBrancheComponent},]
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BrancheRoutingModule { }
