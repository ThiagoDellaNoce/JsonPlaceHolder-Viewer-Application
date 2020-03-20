import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatMenuModule, MatToolbarModule, MatIconModule, MatCardModule, MatDialogModule, MatListModule, MatGridListModule } from '@angular/material';
let AngularMaterialModule = class AngularMaterialModule {
};
AngularMaterialModule = tslib_1.__decorate([
    NgModule({
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
], AngularMaterialModule);
export { AngularMaterialModule };
//# sourceMappingURL=angular-material.module.js.map