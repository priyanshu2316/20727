import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChproComponent } from './chpro.component';

describe('ChproComponent', () => {
  let component: ChproComponent;
  let fixture: ComponentFixture<ChproComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChproComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChproComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
