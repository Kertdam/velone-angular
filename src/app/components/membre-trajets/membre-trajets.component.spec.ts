import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MembreTrajetsComponent } from './membre-trajets.component';

describe('MembreTrajetsComponent', () => {
  let component: MembreTrajetsComponent;
  let fixture: ComponentFixture<MembreTrajetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MembreTrajetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MembreTrajetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
