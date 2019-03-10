import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from 'src/app/list-todos/list-todos.component';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(
    private http: HttpClient
  ) { }

  retriveAllTodos(username){
    return this.http.get<Todo[]>(`http://localhost:8080/users/${username}/todos`); //espera um array de todos entao fica <Todo[]>
  }

  deleteTodo(username, id){
    return this.http.delete(`http://localhost:8080/users/${username}/todos/${id}`)
  }

  updateTodo(username, id){
    return this.http.update(`http://localhost:8080/users/${username}/todos/${id}`)
  }
}
