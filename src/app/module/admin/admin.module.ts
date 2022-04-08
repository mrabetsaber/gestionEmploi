import { MatiereModule } from './management/matiere/matiere.module';
import { TeacherManagementModule } from './management/teacher/teacherManagement.module';
import { StudentManagementModule } from './management/student/studentMangament.module';
import { AdminManagmentModule } from './management/admin/adminManagement.module'
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { HomeComponent } from './components/home/home.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { UsersListComponent } from './management/users/users-list/users-list.component';
import { UpdateGroupComponent } from './management/group/update-group/update-group.component';
import { GroupListComponent } from './management/group/group-list/group-list.component';
import { AddGroupComponent } from './management/group/add-group/add-group.component';

import { UpdateSalleComponent } from './management/salle/update-salle/update-salle.component';
import { AddSalleComponent } from './management/salle/add-salle/add-salle.component';
import { SalleListComponent } from './management/salle/salle-list/salle-list.component';
import { ChoicelistComponent } from './management/choice/choicelist/choicelist.component';
import { UpdateChoicelistComponent } from './management/choice/update-choicelist/update-choicelist.component';
import { AddChoicelistComponent } from './management/choice/add-choicelist/add-choicelist.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrancheModule } from './management/branche/branche.module';


@NgModule({
  declarations: [
    
  
    HomeComponent,
            AdminDashboardComponent,
            HeaderComponent,
            FooterComponent,
            UsersListComponent,
            
            UpdateGroupComponent,
            GroupListComponent,
            AddGroupComponent,
            
           
            
            UpdateSalleComponent,
            AddSalleComponent,
            SalleListComponent,
            ChoicelistComponent,
            UpdateChoicelistComponent,
            AddChoicelistComponent,
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    AdminRoutingModule,
    AdminManagmentModule,
    StudentManagementModule,
    TeacherManagementModule,
    MatiereModule,
    BrancheModule,
  ]
})
export class AdminModule { }
