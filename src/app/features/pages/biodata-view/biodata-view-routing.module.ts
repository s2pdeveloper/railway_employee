import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BiodataViewPage } from './biodata-view.page';

const routes: Routes = [
  {
    path: '',
    component: BiodataViewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BiodataViewPageRoutingModule {}
