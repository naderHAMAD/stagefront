import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetProcessComponent } from './get-process.component';

describe('GetProcessComponent', () => {
  let component: GetProcessComponent;
  let fixture: ComponentFixture<GetProcessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetProcessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
