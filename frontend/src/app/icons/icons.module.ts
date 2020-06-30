import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatherModule } from 'angular-feather';
import { LogIn, Power, Trash2, ArrowLeft } from 'angular-feather/icons';

const icons = {
  LogIn,
  Power,
  Trash2,
  ArrowLeft
};


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FeatherModule.pick(icons)
  ],
  exports: [
    FeatherModule
  ]
})
export class IconsModule { }
