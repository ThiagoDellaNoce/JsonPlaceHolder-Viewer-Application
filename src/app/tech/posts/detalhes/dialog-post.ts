import { Component, Inject } from '@angular/core';

import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogData } from 'src/app/models/dialogData';

@Component({
    selector: 'dialog-post',
    templateUrl: 'dialog-post.html',
})

export class DialogPost {
  
    constructor( public dialogRef: MatDialogRef<DialogPost>,
        @Inject(MAT_DIALOG_DATA) public dialogData: DialogData) {

    }
  
    onNoClick(): void {
        this.dialogRef.close();
    }
}