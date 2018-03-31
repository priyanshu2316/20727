import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChtComponent } from './cht.component';

describe('ChtComponent', () => {
  let component: ChtComponent;
  let fixture: ComponentFixture<ChtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
