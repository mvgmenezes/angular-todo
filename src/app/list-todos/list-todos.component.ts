import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';

export class Todo{
  
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ){

  }
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {


  todos: Todo[]

  messageReturnApi :string
  
  // todos = [
  //   new Todo(1,'Learn to dance', false, new Date()),
  //   new Todo(2,'Become an Expert in Angular', false, new Date()),
  //   new Todo(3,'Visit India', false, new Date()),
  //   new Todo(4,'Become a fluent English', false, new Date())
  // ]

  /* todos = [
      { id : 1, description: 'Learn to dance'},
      { id : 2, description: 'Become an Expert in Angular'},
      { id : 3, description: 'Visit India'}
   ] */
  constructor(private todoDataService:TodoDataService) { }

  ngOnInit() {
    this.todoDataService.retriveAllTodos('mmenezes').subscribe(
      response => {
        console.log(response);
        this.todos = response
      },
      error => {

      }
      
    );
  }

  deleteTodo(id){
    this.todoDataService.deleteTodo('mmenezes', id).subscribe(
      response => {
        console.log(response);
        this.messageReturnApi = `Todo ${id} deleted with success!!!`
        //var index = this.todos.indexOf(id);
        //this.todos.splice(index, 1);   
        this.refreshTodos()  

      },
      error => {

      }
      
    );
  }

  refreshTodos(){
    this.todoDataService.retriveAllTodos('mmenezes').subscribe(
      response => {
        console.log(response);
        this.todos = response
      },
      error => {

      }
      
    );
  }

}
