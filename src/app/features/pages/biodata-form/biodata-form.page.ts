import { Component, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LocalStorageService } from 'src/app/core/local-storage.service';

@Component({
  selector: 'app-biodata-form',
  templateUrl: './biodata-form.page.html',
  styleUrls: ['./biodata-form.page.scss'],
})
export class BiodataFormPage implements OnInit {
  private storageService = inject(LocalStorageService);
  bioData:any;
  constructor() {
   this.bioData = this.storageService.get('BioData');
  }
  ngOnInit() {
    console.log('bioData',this.bioData);
    
  }
  bioDataForm = new FormGroup({
    name: new FormControl('DEEP SINGH THAKUR'),
    empId: new FormControl(45316236745),
    fatherHusband: new FormControl('PHOOL SINGH THAKUR'),
    DOB: new FormControl('1994-05-06'),
    mobile: new FormControl(7898716235),
    email: new FormControl('N/A'),
    aadhar: new FormControl(694540552443),
    pan: new FormControl('ARGPT1810L'),
    HRMS: new FormControl('HXJEGW'),
    AURLY: new FormControl('BHOPAL DIVISION/WCR'),
    billUnit: new FormControl('3603160-C&W PART I, BPL'),
    designation: new FormControl('FILLTER-I'),
    department: new FormControl('MECHANICAL'),
    DOA: new FormControl('2012-09-26'),
    DOI: new FormControl('2025-01-01'),
    DOR: new FormControl('2054-05-31'),
    station: new FormControl('BHOPAL'),
    payRate: new FormControl(31900),
    level: new FormControl(5),
    bank: new FormControl('PNB'),
    IFSC: new FormControl('PUNB0322700'),
    account: new FormControl(3227001500030364),
    preparedDate: new FormControl('23-MAR-2024 01:00:17'),
  });
  submit() {
    let formData = this.bioDataForm.value;
    this.storageService.set('BioData', formData);
  }
}
