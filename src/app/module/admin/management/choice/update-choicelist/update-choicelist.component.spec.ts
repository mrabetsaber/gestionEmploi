import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateChoicelistComponent } from './update-choicelist.component';

describe('UpdateChoicelistComponent', () => {
  let component: UpdateChoicelistComponent;
  let fixture: ComponentFixture<UpdateChoicelistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateChoicelistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateChoicelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
