import { Component, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LocalStorageService } from 'src/app/core/local-storage.service';

@Component({
  selector: 'app-salary-form',
  templateUrl: './salary-form.page.html',
  styleUrls: ['./salary-form.page.scss'],
})
export class SalaryFormPage implements OnInit {
  private storageService = inject(LocalStorageService);
  constructor() { }

  ngOnInit() {
  }
  salaryDataForm = new FormGroup({
    name: new FormControl('DEEP SINGH THAKUR'),
    designation: new FormControl('FILLTER-I'),
    department: new FormControl('MECHANICAL'),
    billUnit: new FormControl('3603160-C&W PART I, BPL'),
    payLevel :new FormControl(5),
    payRate :new FormControl(31900),
    basicPay : new FormControl(31900),
    dearnessAllowance :  new FormControl(14674),
    transportAllowance :  new FormControl(2628),
    travellingAllowance :  new FormControl(1500),
    breakdownAllowance :  new FormControl(540),
    REIS :  new FormControl(30),
    newPensionScheme :  new FormControl(4657),
    electricEnergyCharges :  new FormControl(972),
    waterCharges :  new FormControl(15),
    profTaxMp :  new FormControl(208),
    DDFB :  new FormControl(15),
    welfarecenBpl :  new FormControl(25),
    RLYInstBhopal :  new FormControl(50),
    creccsCMTDBpl :  new FormControl(1800),
    loanECCSBPL :  new FormControl('9/23 12053'),
    payDays :new FormControl(31),
    gross : new FormControl(51242),
    deduction : new FormControl(32416),
    netPay : new FormControl(18826),
    payMode : new FormControl('CIPS(NEFT/CORE BANKING)'),
    bank : new FormControl('PNB(PUNB0322700'),
    accountNo : new FormControl(3227001500030364),
    preparedDate: new FormControl('23-MAR-2024 01:00:17'),
  });
  submit() {
    let formData = this.salaryDataForm.value;
    this.storageService.set('SalaryData', formData);
  }
}
