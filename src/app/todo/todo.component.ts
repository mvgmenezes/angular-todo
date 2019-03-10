import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Todo } from '../list-todos/list-todos.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  id:number
  todo:Todo

  constructor(
    private todoService: TodoDataService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    if (this.id === undefined){
      this.todo = new Todo(0,'',false, new Date());
    }else{  
      this.todo = new Todo(this.id, "", false, new Date()); //como o metodo abaixo é assyncrono o objeto this.todo é vazio e o chrome no momento que carrega nao acha a propriedade que so é carregada no retorno do metodo abaixo. 
      this.todoService.retrieveTodo('mmenezes', this.id)
        .subscribe(
          data => this.todo = data
        )
    
    }
  }

  saveTodo(){

    if (this.id === undefined){
      this.todoService.createTodo('mmenezes', this.todo)
      .subscribe(
        data => {
          console.log(data)
          this.router.navigate(['todos'])
        }
      )
    }else{
      this.todoService.updateTodo('mmenezes', this.id, this.todo)
      .subscribe(
        data => {
          console.log(data)
          this.router.navigate(['todos'])
        }
      )
    }

    
  }

}
