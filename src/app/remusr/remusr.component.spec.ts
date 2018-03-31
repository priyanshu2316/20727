import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemusrComponent } from './remusr.component';

describe('RemusrComponent', () => {
  let component: RemusrComponent;
  let fixture: ComponentFixture<RemusrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemusrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemusrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
