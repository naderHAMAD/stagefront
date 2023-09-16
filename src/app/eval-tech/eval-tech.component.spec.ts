import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvalTechComponent } from './eval-tech.component';

describe('EvalTechComponent', () => {
  let component: EvalTechComponent;
  let fixture: ComponentFixture<EvalTechComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvalTechComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EvalTechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
