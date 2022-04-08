import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatiereDashboardComponent } from './matiere-dashboard.component';

describe('MatiereDashboardComponent', () => {
  let component: MatiereDashboardComponent;
  let fixture: ComponentFixture<MatiereDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatiereDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatiereDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
