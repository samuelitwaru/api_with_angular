import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class TodosService {
	
	isDone = false;

	constructor(private http:Http) { }
	
	getTodos(){
		return this.http
		.get('http://localhost:3000/api/todos')
    .pipe(map(res=>{res.json()}))
  }

	addTodos(todo){
		let headers = new Headers();
		headers.append('Content-Type', 'application/json');
		return this.http
		.post('http://localhost:3000/api/todos', JSON.stringify(todo), {headers})
    .pipe(map(res => {res.json()}))
	}

	deleteTodo(id){
		return this.http
		.delete(`http://localhost:3000/api/todos/${id}`)
    .pipe(map(res => {res.json()}))
	}

	// updateTodo(id){
	// 	return this.http
	// 	.put(`http://localhost:3000/api/todo/${id}`)
	// 	.map(res => {res.json()})
	// }

	updateStatus(todo){
		let headers = new Headers();
		headers.append('Content-Type', 'application/json');
		return this.http
		.put('http://localhost:3000/api/todos' + todo._id, JSON.stringify(todo), 
		{
			headers : headers
		})
    .pipe(map(res => res.json()))
	}
}
