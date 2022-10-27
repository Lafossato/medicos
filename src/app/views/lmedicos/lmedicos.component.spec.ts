import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LmedicosComponent } from './lmedicos.component';

describe('LmedicosComponent', () => {
  let component: LmedicosComponent;
  let fixture: ComponentFixture<LmedicosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LmedicosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LmedicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
