import { Component, Inject } from '@angular/core';

import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

import { Post } from 'src/app/models/post';

@Component({
    selector: 'dialog-post',
    templateUrl: 'dialog-post.html',
})

export class DialogPost {
  
    constructor(
        public dialogRef: MatDialogRef<DialogPost>,
        @Inject(MAT_DIALOG_DATA) public post: Post
    ) {}
  
    onNoClick(): void {
        this.dialogRef.close();
    }
  
}