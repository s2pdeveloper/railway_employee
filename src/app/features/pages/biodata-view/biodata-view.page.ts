import { Component, OnInit, inject } from '@angular/core';
import { LocalStorageService } from 'src/app/core/local-storage.service';

@Component({
  selector: 'app-biodata-view',
  templateUrl: './biodata-view.page.html',
  styleUrls: ['./biodata-view.page.scss'],
})
export class BiodataViewPage implements OnInit {

  private storageService = inject(LocalStorageService);
  bioData:any;
  constructor() {
   this.bioData = this.storageService.get('BioData');
  }
  ngOnInit() {
    console.log('bioData',this.bioData);
  }
}
