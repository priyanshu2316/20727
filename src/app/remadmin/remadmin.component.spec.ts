import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemadminComponent } from './remadmin.component';

describe('RemadminComponent', () => {
  let component: RemadminComponent;
  let fixture: ComponentFixture<RemadminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemadminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
