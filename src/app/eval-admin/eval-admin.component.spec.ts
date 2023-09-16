import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvalAdminComponent } from './eval-admin.component';

describe('EvalAdminComponent', () => {
  let component: EvalAdminComponent;
  let fixture: ComponentFixture<EvalAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvalAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EvalAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
