import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BiodataFormPage } from './biodata-form.page';

describe('BiodataFormPage', () => {
  let component: BiodataFormPage;
  let fixture: ComponentFixture<BiodataFormPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BiodataFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
