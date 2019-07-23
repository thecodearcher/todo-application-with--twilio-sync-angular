import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private baseUrl = 'http://127.0.0.1:8000/api/todo';

  constructor(private http: HttpClient) { }

  createTodo(body) {
    return this.http.post(this.baseUrl, body);
  }

  updateTodo(sid: string, todo) {
    return this.http.put(`${this.baseUrl}/${sid}`, { ...todo });
  }
  // tslint:disable-next-line: variable-name
  deleteTodo(sid: string) {
    return this.http.delete(`${this.baseUrl}/${sid}`);
  }

  getTodos() {
    return this.http.get(this.baseUrl);
  }
}
