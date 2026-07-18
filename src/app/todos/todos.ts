import { Component, inject, OnInit, signal } from '@angular/core';
import { TodosService } from '../services/todos';
import { Todo } from '../model/todo.type';
import { catchError } from 'rxjs';
import { TodoItem } from '../component/todo-item/todo-item';

@Component({
  selector: 'app-todos',
  imports: [TodoItem],
  templateUrl: './todos.html',
  styleUrl: './todos.scss',
})
export class Todos implements OnInit {

  todoService = inject(TodosService);
  todoItems = signal<Array<Todo>>([])

  ngOnInit(): void {
    this.todoService.getTodosFromAPI()
      .pipe(
        catchError(
          (err) => {
            console.log(err);
            throw err;
          })
      )
      .subscribe(
        (todos) => {
          this.todoItems.set(todos);
        }
      )
  }

  updateTodoItem(TodoItem: Todo) {
    this.todoItems.update((todos) => {
      return todos.map((todo) => {
        if (todo.id === TodoItem.id) {
          return {
            ...todo,
            completed: !todo.completed
          }
        }
        return todo;
      });
    })
  }

}
