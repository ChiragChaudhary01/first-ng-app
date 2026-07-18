import { inject, Service } from '@angular/core';
import { Todo } from '../model/todo.type';
import { HttpClient } from '@angular/common/http';

@Service()
export class TodosService {
    http = inject(HttpClient);

    getTodosFromAPI() {
        const URL = `https://jsonplaceholder.typicode.com/todos`;
        return this.http.get<Array<Todo>>(URL)
    }
}
