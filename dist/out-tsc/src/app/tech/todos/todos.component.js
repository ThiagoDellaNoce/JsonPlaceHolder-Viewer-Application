import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let TodosComponent = class TodosComponent {
    constructor(todoService) {
        this.todoService = todoService;
    }
    ngOnInit() {
        this.todoService.getTodos().subscribe(res => {
            this.data = res;
            this.todos = this.data;
            console.log(this.todos);
        }, err => { });
    }
};
TodosComponent = tslib_1.__decorate([
    Component({
        selector: 'app-todos',
        templateUrl: './todos.component.html',
        styleUrls: ['./todos.component.scss']
    })
], TodosComponent);
export { TodosComponent };
//# sourceMappingURL=todos.component.js.map