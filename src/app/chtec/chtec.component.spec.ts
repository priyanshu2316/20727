import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChtecComponent } from './chtec.component';

describe('ChtecComponent', () => {
  let component: ChtecComponent;
  let fixture: ComponentFixture<ChtecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChtecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChtecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
