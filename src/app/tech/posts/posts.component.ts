import { Component, OnInit } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import { DialogPost } from './detalhes/dialog-post';
import { Overlay } from '@angular/cdk/overlay';

import { Post } from 'src/app/models/post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  title: string = "Title";
  body: string = "Body";

  post: Post = { title: this.title, body: this.body };

  constructor(public dialog: MatDialog, private overlay: Overlay) { }

  ngOnInit() { }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogPost, {
      width: '90%',
      autoFocus: false,
      maxHeight: '90vh',
      data: this.post,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }
}








