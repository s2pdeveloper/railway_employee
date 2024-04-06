import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BiodataViewPage } from './biodata-view.page';

describe('BiodataViewPage', () => {
  let component: BiodataViewPage;
  let fixture: ComponentFixture<BiodataViewPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BiodataViewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
