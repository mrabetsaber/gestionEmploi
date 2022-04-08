import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatiereRoutingModule } from './matiere-routing.module';
import { UpadteMatiereComponent } from './upadte-matiere/upadte-matiere.component';
import { AddMatiereComponent } from './add-matiere/add-matiere.component';
import { MatiereListComponent } from './matiere-list/matiere-list.component';
import { MatiereDashboardComponent } from './matiere-dashboard/matiere-dashboard.component';
import { MatiereheaderComponent } from './matiereheader/matiereheader.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    UpadteMatiereComponent,
    AddMatiereComponent,
    MatiereListComponent,
    MatiereDashboardComponent,
    MatiereheaderComponent
  ],
  imports: [
    CommonModule,
    MatiereRoutingModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class MatiereModule { }
