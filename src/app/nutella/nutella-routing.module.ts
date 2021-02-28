import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NutellaPage } from './nutella.page';

const routes: Routes = [
  {
    path: '',
    component: NutellaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NutellaPageRoutingModule {}
