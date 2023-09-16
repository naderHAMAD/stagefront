import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvalFinComponent } from './eval-fin.component';

describe('EvalFinComponent', () => {
  let component: EvalFinComponent;
  let fixture: ComponentFixture<EvalFinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvalFinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EvalFinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
