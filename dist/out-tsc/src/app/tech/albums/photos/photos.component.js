import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let PhotosComponent = class PhotosComponent {
    constructor(route, albumsService) {
        this.route = route;
        this.albumsService = albumsService;
    }
    ngOnInit() {
        this.route.params.subscribe(params => {
            const param = params['id'];
            if (param.match(/\d+/)) {
                this.albumId = +params['id'];
                this.albumsService.getPhotos(this.albumId).subscribe(res => {
                    this.data = res;
                    this.photos = this.data;
                }, err => { });
            }
        });
    }
};
PhotosComponent = tslib_1.__decorate([
    Component({
        selector: 'app-photos',
        templateUrl: './photos.component.html',
        styleUrls: ['./photos.component.scss']
    })
], PhotosComponent);
export { PhotosComponent };
//# sourceMappingURL=photos.component.js.map