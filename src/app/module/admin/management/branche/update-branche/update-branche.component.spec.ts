import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateBrancheComponent } from './update-branche.component';

describe('UpdateBrancheComponent', () => {
  let component: UpdateBrancheComponent;
  let fixture: ComponentFixture<UpdateBrancheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateBrancheComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateBrancheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
