import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyprobComponent } from './myprob.component';

describe('MyprobComponent', () => {
  let component: MyprobComponent;
  let fixture: ComponentFixture<MyprobComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyprobComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyprobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
