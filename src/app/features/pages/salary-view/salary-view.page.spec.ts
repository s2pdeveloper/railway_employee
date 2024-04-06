import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SalaryViewPage } from './salary-view.page';

describe('SalaryViewPage', () => {
  let component: SalaryViewPage;
  let fixture: ComponentFixture<SalaryViewPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SalaryViewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
