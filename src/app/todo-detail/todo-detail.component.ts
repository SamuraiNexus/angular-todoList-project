import { Component, input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { param } from 'express-validator';
import { Todo } from '../todo-list/todo.model';
import { TodoService } from '../todo-list/todo.service';

@Component({
  selector: 'app-todo-detail',
  standalone: true,
  imports: [],
  templateUrl: './todo-detail.component.html',
  styleUrl: './todo-detail.component.css'
})
export class TodoDetailComponent implements OnInit{
  todo:Todo = {
    userId: 1,
    id: 1,
    title: "default todo",
    completed: false,
  };
  id:number = 1;
  constructor(private todoService: TodoService, private route: ActivatedRoute) {

  }
  ngOnInit(): void {
    this.route.paramMap.subscribe(param => {
      if (param == null) {
        this.id = 0;
      } else {
        this.id  = +param.get('id')!;
      }
      console.log(param, this.id)
      this.todoService.getById(this.id).subscribe(todo => this.todo = todo)
      console.log(this.todo)
    })
  }
  
}
