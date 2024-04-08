import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/core/local-storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  private storageService = inject(LocalStorageService);
  bioData:any;
  salaryData:any;
  constructor(private router: Router) {
   this.bioData = this.storageService.get('BioData');
   this.salaryData = this.storageService.get('SalaryData');
  }
  ngOnInit() {
    console.log('bioData',this.bioData);
    console.log('salaryData',this.salaryData);
    
  }
  navigateTo(path: any) {
    this.router.navigate([path]);
  }
}
