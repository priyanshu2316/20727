import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocatComponent } from './locat.component';

describe('LocatComponent', () => {
  let component: LocatComponent;
  let fixture: ComponentFixture<LocatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
