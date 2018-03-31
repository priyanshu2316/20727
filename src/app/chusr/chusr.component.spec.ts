import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChusrComponent } from './chusr.component';

describe('ChusrComponent', () => {
  let component: ChusrComponent;
  let fixture: ComponentFixture<ChusrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChusrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChusrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
