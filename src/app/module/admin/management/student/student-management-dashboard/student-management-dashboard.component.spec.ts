import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentManagementDashboardComponent } from './student-management-dashboard.component';

describe('StudentManagementDashboardComponent', () => {
  let component: StudentManagementDashboardComponent;
  let fixture: ComponentFixture<StudentManagementDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentManagementDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentManagementDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
