import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrancheRoutingModule } from './branche-routing.module';
import { BrancheListComponent } from './branche-list/branche-list.component';
import { AddBrancheComponent } from './add-branche/add-branche.component';
import { UpdateBrancheComponent } from './update-branche/update-branche.component';
import { HeaderComponent } from './header/header.component';
import { BrancheDashboardComponent } from './branche-dashboard/branche-dashboard.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    BrancheListComponent,
            AddBrancheComponent,
            UpdateBrancheComponent,
            HeaderComponent,
            BrancheDashboardComponent,
  ],
  imports: [
    CommonModule,
    BrancheRoutingModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class BrancheModule { }
