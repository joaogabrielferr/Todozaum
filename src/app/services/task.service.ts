import { Injectable } from '@angular/core';
import { Task } from '../Task';
import { Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';


const httpOptions = {

  headers: new HttpHeaders(
    {
      'content-type' : 'application/json'
    }
  )

}


@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private apiUrl = "http://localhost:5000/tasks";
  
  private message:string = "testando o git flow";
  private message2:string = "criando feature add-mensagem";

  constructor(private http: HttpClient) { }

  getTasks(): Observable<Task[]>{
    
    return this.http.get<Task[]>(this.apiUrl);
    
  }

  deleteTasks(task : Task) : Observable<Task>{

      const deleteUrl = `${this.apiUrl}/${task.id}`;
      return this.http.delete<Task>(deleteUrl);

  }

  updateTaskReminder(task : Task) : Observable<Task>{

    console.log("teste");
    const updateUrl = `${this.apiUrl}/${task.id}`;
    return this.http.put<Task>(updateUrl,task,httpOptions);
  }

  createTask(task : Task) : Observable<Task>{
    return this.http.post<Task>(this.apiUrl,task,httpOptions);
  }


}
