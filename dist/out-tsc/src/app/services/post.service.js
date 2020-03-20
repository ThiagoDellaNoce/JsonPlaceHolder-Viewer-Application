import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
let PostService = class PostService {
    constructor(http) {
        this.http = http;
        this.apiURL = "https://jsonplaceholder.typicode.com/";
    }
    getPosts() {
        return this.http.get(this.apiURL + 'posts/');
    }
    getCommentsByPost(postId) {
        return this.http.get(this.apiURL + 'comments?postId=' + postId);
    }
};
PostService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    })
], PostService);
export { PostService };
//# sourceMappingURL=post.service.js.map