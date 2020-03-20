import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class TodoService {
  apiURL: string = "https://jsonplaceholder.typicode.com/";

  constructor(private http: HttpClient) {};

  getTodos() {
    return this.http.get(this.apiURL + "todos/");
  }

  getDetalheTodo(id: number) {
    return this.http.get(this.apiURL + "todos/" + id);
  };
};
