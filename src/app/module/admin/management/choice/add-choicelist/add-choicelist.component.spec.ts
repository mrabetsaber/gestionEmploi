import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddChoicelistComponent } from './add-choicelist.component';

describe('AddChoicelistComponent', () => {
  let component: AddChoicelistComponent;
  let fixture: ComponentFixture<AddChoicelistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddChoicelistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddChoicelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
