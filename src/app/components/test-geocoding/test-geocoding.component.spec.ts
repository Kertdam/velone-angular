import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestGeocodingComponent } from './test-geocoding.component';

describe('TestGeocodingComponent', () => {
  let component: TestGeocodingComponent;
  let fixture: ComponentFixture<TestGeocodingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestGeocodingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestGeocodingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
