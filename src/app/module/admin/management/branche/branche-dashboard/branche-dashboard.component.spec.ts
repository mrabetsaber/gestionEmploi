import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrancheDashboardComponent } from './branche-dashboard.component';

describe('BrancheDashboardComponent', () => {
  let component: BrancheDashboardComponent;
  let fixture: ComponentFixture<BrancheDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrancheDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrancheDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
