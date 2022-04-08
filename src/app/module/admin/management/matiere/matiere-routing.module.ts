import { MatiereDashboardComponent } from './matiere-dashboard/matiere-dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatiereListComponent } from './matiere-list/matiere-list.component';
import { AddMatiereComponent } from './add-matiere/add-matiere.component';
import { UpadteMatiereComponent } from './upadte-matiere/upadte-matiere.component';

const routes: Routes = [
  {  path: 'matiereList',
      component: MatiereDashboardComponent,
      children: [

      {path: '', component: MatiereListComponent},
    { path: 'addMatiere', component: AddMatiereComponent },
      { path: 'updateMatiere/:id', component: UpadteMatiereComponent},]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MatiereRoutingModule { }
