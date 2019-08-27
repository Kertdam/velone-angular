import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTrajetComponent } from './form-trajet.component';

describe('FormTrajetComponent', () => {
  let component: FormTrajetComponent;
  let fixture: ComponentFixture<FormTrajetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormTrajetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormTrajetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
