import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GridPageComponent } from '@pages/grid-page/grid-page.component';
import { PagesComponent } from '@pages/pages.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: 'grid',
        component: GridPageComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
