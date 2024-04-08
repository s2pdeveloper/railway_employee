import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-salary-view',
  templateUrl: './salary-view.page.html',
  styleUrls: ['./salary-view.page.scss'],
})
export class SalaryViewPage implements OnInit {
  segmentActive: any = 'MONTHLY';
  constructor() {}

  ngOnInit() {}
  tabChange(ev: any) {
    switch (ev.detail.value) {
      case 'MONTHLY':
        this.segmentActive = 'MONTHLY';
        break;
      case 'YEARLY':
        this.segmentActive = 'YEARLY';
        break;
      case 'SUPPLEMENTARY':
        this.segmentActive = 'SUPPLEMENTARY';
        break;
      default:
        break;
    }
  }
}
