import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
let TodoService = class TodoService {
    constructor(http) {
        this.http = http;
        this.apiURL = "https://jsonplaceholder.typicode.com/";
    }
    getTodos() {
        return this.http.get(this.apiURL + 'todos/');
    }
    getDetalheTodo(id) {
        return this.http.get(this.apiURL + 'todos/' + id);
    }
};
TodoService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    })
], TodoService);
export { TodoService };
//# sourceMappingURL=todo.service.js.map