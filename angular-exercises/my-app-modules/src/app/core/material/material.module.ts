import { NgModule } from '@angular/core';

import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';


@NgModule({
  declarations: [],
  imports: [
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatToolbarModule
  ],
  exports: [
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatToolbarModule
  ]
})
export class MaterialModule { }
