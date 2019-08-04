import { Component, OnInit } from '@angular/core';
import { TodosService } from '../todos.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
	
	todos = [{"action":"write more code","isDone":false,"_id":"87ee78836a739d9278492x9s9093234"},{"action":"help the old lady","isDone":false,"_id":"899ss9se90900etrtr9090076nn3nn34"},{"action":"study","isDone":true,"_id":"nncg23353nnk3421214513n1kjg1jk34"}];
	todo: any;
	action: any;
	name: any;
	isDone: boolean;

  constructor(private todoService: TodosService) { }

  ngOnInit() {
  	this.todoService.getTodos().subscribe(todos => {
  		//this.todos = todos;
  	})
  }

  addTodos(event){
  	event.preventDefault();
  	let newTodo = {
  		name: this.name,
  		action: this.action,
  		isDone: false
  	};

  	this.todoService.addTodos(newTodo).subscribe(todo => {
  		this.todo.push(todo);
  		this.name = '';
  		this.action = '';
  	});
  }

  deleteTodo(id) {
  	let todos = this.todos;
  	this.todoService.deleteTodo(id).subscribe(data => {
  		const index = this.todos.findIndex(todo=>{todo._id == id;})
  		todos.splice(index, 1)
  	});
  }

  updateStatus(todo) {
  	var _todo = {
  		_id: todo._id,
  		action: todo.action,
  		isDone: !todo.isDone
  	}

  	this.todoService.updateStatus(_todo).subscribe(data=>{
  		const index = this.todos.findIndex(todo => {todo._id == _todo._id})
  		this.todos[index] = _todo;
  	})
  }

  choice(todo){
  	console.log(todo);
  	return todo.isDone;
  }

}
