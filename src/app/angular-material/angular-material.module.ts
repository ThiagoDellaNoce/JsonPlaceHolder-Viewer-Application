import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import {
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatDialogModule,
  MatListModule,
  MatGridListModule
} from "@angular/material";

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatDialogModule,
    MatListModule,
    MatGridListModule
  ],
  exports: [
    MatButtonModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatDialogModule,
    MatListModule,
    MatGridListModule
  ]
})
export class AngularMaterialModule {}
