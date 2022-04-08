import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpadteMatiereComponent } from './upadte-matiere.component';

describe('UpadteMatiereComponent', () => {
  let component: UpadteMatiereComponent;
  let fixture: ComponentFixture<UpadteMatiereComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpadteMatiereComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpadteMatiereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
