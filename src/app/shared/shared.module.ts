import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

const MODULES = [
  ReactiveFormsModule,
  FormsModule,
  HttpClientModule,
  BrowserAnimationsModule,
];

const MATERIAL_MODULES = [MatToolbarModule, MatButtonModule];

@NgModule({
  imports: [...MODULES, MATERIAL_MODULES],
  exports: [...MODULES, MATERIAL_MODULES],
})
export class SharedModule {}
