import { Component, OnInit, inject } from '@angular/core';
import { LocalStorageService } from 'src/app/core/local-storage.service';

@Component({
  selector: 'app-monthly-salary',
  templateUrl: './monthly-salary.component.html',
  styleUrls: ['./monthly-salary.component.scss'],
})
export class MonthlySalaryComponent implements OnInit {
  private storageService = inject(LocalStorageService);
  salaryData: any;
  loanECCSBPLS: number = 0;
  loanECCSBPLL: number = 0;
  // loanECCSBWKS: number = 0;
  // loanECCSWKL: number = 0;
  constructor() {
    this.salaryData = this.storageService.get('SalaryData');
  }

  ngOnInit() {
    this.loanECCSBPLS = this.salaryData?.loanECCSBPL.split(' ')[0];
    this.loanECCSBPLL = this.salaryData?.loanECCSBPL.split(' ')[1];
    // this.loanECCSBWKS = this.salaryData?.loanECCSBWK.split(' ')[0];
    // this.loanECCSWKL = this.salaryData?.loanECCSBWK.split(' ')[1];
  }
}
