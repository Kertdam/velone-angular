import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarteStatiqueComponent } from './carte-statique.component';

describe('CarteStatiqueComponent', () => {
  let component: CarteStatiqueComponent;
  let fixture: ComponentFixture<CarteStatiqueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarteStatiqueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarteStatiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
