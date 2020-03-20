import * as tslib_1 from "tslib";
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
let DialogPost = class DialogPost {
    constructor(dialogRef, dialogData) {
        this.dialogRef = dialogRef;
        this.dialogData = dialogData;
    }
    onNoClick() {
        this.dialogRef.close();
    }
};
DialogPost = tslib_1.__decorate([
    Component({
        selector: 'dialog-post',
        templateUrl: 'dialog-post.html',
    }),
    tslib_1.__param(1, Inject(MAT_DIALOG_DATA))
], DialogPost);
export { DialogPost };
//# sourceMappingURL=dialog-post.js.map