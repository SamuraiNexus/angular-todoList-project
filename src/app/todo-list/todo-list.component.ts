import { Component, isStandalone, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { StringModifyPipe } from './pipes/string-modify.pipe';
import { Todo } from './todo.model';
import { TodoService } from './todo.service';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [StringModifyPipe, RouterModule],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css',
})
export class TodoListComponent implements OnInit{
  todos: Todo[] = [];
  constructor(private todoService: TodoService) {

  }
  ngOnInit(): void {
    this.todoService.getToDo().subscribe(todos => this.todos = todos)
  }

  getAll(): Todo[] {
    return this.todos;
  }

  deleteTodo(id: any): void {
    this.todos = this.todos.filter(todo => todo.id !== id);
  }

}
