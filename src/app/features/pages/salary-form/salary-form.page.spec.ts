import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SalaryFormPage } from './salary-form.page';

describe('SalaryFormPage', () => {
  let component: SalaryFormPage;
  let fixture: ComponentFixture<SalaryFormPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SalaryFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
