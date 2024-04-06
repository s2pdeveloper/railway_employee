import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BiodataFormPage } from './biodata-form.page';

const routes: Routes = [
  {
    path: '',
    component: BiodataFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BiodataFormPageRoutingModule {}
