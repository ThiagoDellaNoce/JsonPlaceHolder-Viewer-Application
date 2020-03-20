import { Component, OnInit } from '@angular/core';

import { Todo } from 'src/app/models/todo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  data: any;

  todo: Todo;
  todos: Todo[];

  constructor( private todoService: TodoService) { }

  ngOnInit() {
    this.todoService.getTodos().subscribe(
      res => {
        this.data = res;

        this.todos = this.data;
        console.log(this.todos)
      },
      err => { }
    );
  }

}