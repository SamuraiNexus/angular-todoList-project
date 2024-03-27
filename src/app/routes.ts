import {Routes} from "@angular/router";
import { TodoListComponent } from "./todo-list/todo-list.component";
import { HomepageComponent } from "./homepage/homepage.component";
import { TodoDetailComponent } from "./todo-detail/todo-detail.component";
const routeConfig : Routes= [
  {
    path: 'todo',
    component: TodoListComponent,
    title :'To do list'
  },
  {
    path: 'home',
    component: HomepageComponent,
    title :'Home'
  },
  { path: 'todo/:id', component: TodoDetailComponent,
title:'To do detail' }
];
export default routeConfig;