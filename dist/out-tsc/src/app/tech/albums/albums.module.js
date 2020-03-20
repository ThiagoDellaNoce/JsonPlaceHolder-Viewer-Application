import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumsRoutingModule } from './albums.routing.module';
import { AngularMaterialModule } from 'src/app/angular-material/angular-material.module';
import { AlbumsComponent } from './albums.component';
import { PhotosComponent } from './photos/photos.component';
let AlbumsModule = class AlbumsModule {
};
AlbumsModule = tslib_1.__decorate([
    NgModule({
        declarations: [
            PhotosComponent,
            AlbumsComponent
        ],
        imports: [
            CommonModule,
            AngularMaterialModule,
            AlbumsRoutingModule
        ]
    })
], AlbumsModule);
export { AlbumsModule };
//# sourceMappingURL=albums.module.js.map