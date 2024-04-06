import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FeaturesPage } from './features.page';

const routes: Routes = [
  {
    path: '',
    component: FeaturesPage,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        loadChildren: () =>
          import('./pages/home/home.module').then((m) => m.HomePageModule),
      },
      {
        path: 'biodata-form',
        loadChildren: () =>
          import('./pages/biodata-form/biodata-form.module').then(
            (m) => m.BiodataFormPageModule
          ),
      },
      {
        path: 'biodata-view',
        loadChildren: () =>
          import('./pages/biodata-view/biodata-view.module').then(
            (m) => m.BiodataViewPageModule
          ),
      },
      {
        path: 'salary-view',
        loadChildren: () =>
          import('./pages/salary-view/salary-view.module').then(
            (m) => m.SalaryViewPageModule
          ),
      },
      {
        path: 'salary-form',
        loadChildren: () =>
          import('./pages/salary-form/salary-form.module').then(
            (m) => m.SalaryFormPageModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeaturesPageRoutingModule {}
