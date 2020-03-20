import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let AlbumsComponent = class AlbumsComponent {
    constructor(albumService) {
        this.albumService = albumService;
    }
    ngOnInit() {
        this.albumService.getAlbums().subscribe(res => {
            this.data = res;
            this.albums = this.data;
        }, err => { });
    }
};
AlbumsComponent = tslib_1.__decorate([
    Component({
        selector: 'app-albums',
        templateUrl: './albums.component.html',
        styleUrls: ['./albums.component.scss']
    })
], AlbumsComponent);
export { AlbumsComponent };
//# sourceMappingURL=albums.component.js.map