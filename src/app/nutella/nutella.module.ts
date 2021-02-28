import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NutellaPageRoutingModule } from './nutella-routing.module';

import { NutellaPage } from './nutella.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NutellaPageRoutingModule
  ],
  declarations: [NutellaPage]
})
export class NutellaPageModule {}
