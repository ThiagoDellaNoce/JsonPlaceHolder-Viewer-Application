import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
let AlbumService = class AlbumService {
    constructor(http) {
        this.http = http;
        this.apiURL = "https://jsonplaceholder.typicode.com/";
    }
    getAlbums() {
        return this.http.get(this.apiURL + 'albums');
    }
    getPhotos(albumId) {
        return this.http.get(this.apiURL + 'photos?albumId=' + albumId);
    }
};
AlbumService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    })
], AlbumService);
export { AlbumService };
//# sourceMappingURL=album.service.js.map