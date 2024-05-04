import { Component, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LocalStorageService } from 'src/app/core/local-storage.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-salary-form',
  templateUrl: './salary-form.page.html',
  styleUrls: ['./salary-form.page.scss'],
})
export class SalaryFormPage implements OnInit {
  private storageService = inject(LocalStorageService);
  constructor(private toast: ToastService) { }

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
    arrearsDA :  new FormControl(1396),
    houseRentAllowance :  new FormControl(3285),
    transportAllowance :  new FormControl(2628),
    cellAllowance :  new FormControl(53),
    nightDutyAllowance :  new FormControl(3559),
    nationalHolidayAllowance :  new FormControl(1260),

    PFS :  new FormControl(3042),
    REIS :  new FormControl(30),
    profTaxMp :  new FormControl(208),
    DDFB :  new FormControl(15),
    RLYInstBhopal :  new FormControl(50),
    creccsCMTDBpl :  new FormControl(1800),
    creccsCMTDEWK :  new FormControl(1600),
    PCAR :  new FormControl('47/3 1000'),
    // newPensionScheme :  new FormControl(4657),
    // electricEnergyCharges :  new FormControl(972),
    // waterCharges :  new FormControl(15),
    loanECCSBPL :  new FormControl('12/17 14549'),
    loanECCSBWK :  new FormControl('11/73 22054'),
    payDays :new FormControl(31),
    gross : new FormControl(51242),
    deduction : new FormControl(32416),
    netPay : new FormControl(18826),
    payMode : new FormControl('CIPS(NEFT/CORE BANKING)'),
    bank : new FormControl('PNB(PUNB0322700'),
    accountNo : new FormControl(3227001500030364),
    preparedDate: new FormControl('23-MAR-2024 01:00:17'),
    salaryMonth : new FormControl(),
  });
  submit() {
    let formData = this.salaryDataForm.value;
    this.storageService.set('SalaryData', formData);
    this.toast.success("SalaryData added successfully");
  }
}
