import * as tslib_1 from "tslib";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AlbumsComponent } from './albums.component';
import { PhotosComponent } from './photos/photos.component';
const albumsRoutes = [
    { path: '', component: AlbumsComponent },
    { path: ':id', component: PhotosComponent,
        children: [
            { path: '', component: PhotosComponent },
            { path: 'fotos', component: PhotosComponent }
        ]
    }
];
let AlbumsRoutingModule = class AlbumsRoutingModule {
};
AlbumsRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forChild(albumsRoutes)],
        exports: [RouterModule]
    })
], AlbumsRoutingModule);
export { AlbumsRoutingModule };
//# sourceMappingURL=albums.routing.module.js.map