import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { DialogPost } from './detalhes/dialog-post';
let PostsComponent = class PostsComponent {
    constructor(dialog, postService) {
        this.dialog = dialog;
        this.postService = postService;
    }
    ngOnInit() {
        this.postService.getPosts().subscribe(res => {
            this.data = res;
            this.posts = this.data;
        }, err => { });
    }
    openDialog(post) {
        const postId = post.id;
        this.postService.getCommentsByPost(postId).subscribe(res => {
            this.data = res;
            let comments = this.data;
            const dialogData = { post, comments };
            this.dialog.open(DialogPost, {
                width: '90%',
                autoFocus: false,
                maxHeight: '90vh',
                data: dialogData,
            });
        }, err => { });
    }
};
PostsComponent = tslib_1.__decorate([
    Component({
        selector: 'app-posts',
        templateUrl: './posts.component.html',
        styleUrls: ['./posts.component.scss']
    })
], PostsComponent);
export { PostsComponent };
//# sourceMappingURL=posts.component.js.map