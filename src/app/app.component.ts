import { TodoService } from './services/todo-service.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'todo-app';
  todos: { body: string, created_at: Date, sid: string, isDone: boolean }[] = [];
  itemValue: string;

  constructor(private todoService: TodoService) {
    this.getTodos(); // Get todos on component intialization
  }

  getTodos() {
    this.todoService.getTodos()
      .subscribe((res: any) => {
        this.todos = res;
        this.todos.reverse();
        console.log(res);
      }, error => {
        console.error(error);
      });
  }

  createTodo() {
    this.todoService.createTodo({ body: this.itemValue })
      .subscribe((res: any) => {
        this.todos.unshift(res);
        this.itemValue = '';
        console.log(res);
      }, error => {
        console.error(error);
      });
  }

  deleteTodo(todoSid) {
    this.todoService.deleteTodo(todoSid)
      .subscribe((res: any) => {
        this.todos = this.todos.filter(todo => todo.sid !== todoSid);
        this.itemValue = '';
        console.log(res);
      }, error => {
        console.error(error);
      });
  }

  updateTodo(todo) {
    this.todoService.updateTodo(todo.sid, todo)
      .subscribe((res: any) => {
        this.itemValue = '';
        console.log(res);
      }, error => {
        console.error(error);
      });
  }
}
