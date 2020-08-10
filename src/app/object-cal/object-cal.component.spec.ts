import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjectCalComponent } from './object-cal.component';

describe('ObjectCalComponent', () => {
  let component: ObjectCalComponent;
  let fixture: ComponentFixture<ObjectCalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObjectCalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObjectCalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
