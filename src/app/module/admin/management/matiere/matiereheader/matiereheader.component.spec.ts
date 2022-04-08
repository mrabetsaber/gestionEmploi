import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatiereheaderComponent } from './matiereheader.component';

describe('MatiereheaderComponent', () => {
  let component: MatiereheaderComponent;
  let fixture: ComponentFixture<MatiereheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatiereheaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatiereheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
