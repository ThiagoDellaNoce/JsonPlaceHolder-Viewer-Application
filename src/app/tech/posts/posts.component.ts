import { Component, OnInit } from "@angular/core";

import { MatDialog } from "@angular/material/dialog";
import { DialogPost } from "./detalhes/dialog-post";

import { PostService } from "src/app/services/post.service";
import { Post } from "src/app/models/post";

@Component({
  selector: "app-posts",
  templateUrl: "./posts.component.html",
  styleUrls: ["./posts.component.scss"]
})
export class PostsComponent implements OnInit {
  data: any;

  post: Post;
  posts: Post[];

  comment: Comment;
  comments: Comment[];

  constructor(private dialog: MatDialog, private postService: PostService) {}

  ngOnInit() {
    this.postService.getPosts().subscribe(
      res => {
        this.data = res;

        this.posts = this.data;
      },
      err => {}
    );
  };

  openDialog(post: Post): void {
    const postId = post.id;

    this.postService.getCommentsByPost(postId).subscribe(
      res => {
        this.data = res;
        const comments = this.data;

        const dialogData = { post, comments };

        this.dialog.open(DialogPost, {
          width: "90%",
          autoFocus: false,
          maxHeight: "90vh",
          data: dialogData
        });
      },
      err => {}
    );
  };
};
