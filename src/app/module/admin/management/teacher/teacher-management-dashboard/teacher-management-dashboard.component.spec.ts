import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherManagementDashboardComponent } from './teacher-management-dashboard.component';

describe('TeacherManagementDashboardComponent', () => {
  let component: TeacherManagementDashboardComponent;
  let fixture: ComponentFixture<TeacherManagementDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeacherManagementDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherManagementDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
