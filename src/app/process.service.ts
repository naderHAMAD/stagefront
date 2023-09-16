import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Process } from './process';

@Injectable({
  providedIn: 'root'
})
export class ProcessService {

  private baseURL="http://localhost:8090/workflow/processes";
  private addUrl="http://localhost:8090/workflow/addprocess";
  private runProcUrl="http://localhost:8090/workflow/startprocess";
  private procInstUrl="http://localhost:8090/workflow/procinstances";
  private procInsStateURL="http://localhost:8090/workflow/procintdetail";
  private procInsDateURL="http://localhost:8090/workflow/procintdetaildate";
  private taskListURL="http://localhost:8090/workflow/tasklist";
  private taskNameURL="http://localhost:8090/workflow/task";
  private taskStartURL="http://localhost:8090/workflow/starttask";
  private completeTaskURL="http://localhost:8090/workflow/completetaskvar";
  

  constructor(private httpClient:HttpClient) { }

  getProcessesList():Observable<Process[]>{
    return this.httpClient.get<Process[]>(`${this.baseURL}`);
  }
  createWorkflow(process:Process):Observable<Object>{
     return this.httpClient.post(`${this.addUrl}`,process);
  }

  getProcessById(id:number):Observable<Process>{
    return this.httpClient.get<Process>(`${this.baseURL}/${id}`);
  }

  updateProcess(id:number,process:Process):Observable<Object>{
      return this.httpClient.put(`${this.baseURL}/${id}`,process);

  }
  deleteProcess(id:number):Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }

  startProcess(container:String,process:String):Observable<Object>{
    return  this.httpClient.post(`${this.runProcUrl}/${container}/${process}`,{container,process});
  }
  getProcessInstances(container:String):Observable<Object>{
    return this.httpClient.get<Process>(`${this.procInstUrl}/${container}`);
  }

  getProcessInstanceState(container:String,id:String):Observable<Object>{
    return this.httpClient.get<Process>(`${this.procInsStateURL}/${container}/${id}`);
  }
  getProcessInstanceDate(container:String,id:String):Observable<Object>{
    return this.httpClient.get<Process>(`${this.procInsDateURL}/${container}/${id}`);
  }
  getTaskList(id:string):Observable<Object>{
    return this.httpClient.get<Process>(`${this.taskListURL}/${id}`);
  }
  getTaskName(container:string|null,id:string):Observable<Object>{
    return this.httpClient.get<Process>(`${this.taskNameURL}/${container}/${id}`);
  }
  startTask(container:string | null,id:string):Observable<Object>{
    return this.httpClient.put(`${this.taskStartURL}/${container}/${id}`,null);
  }
  completeTask(container:string |null,id:string,vari:string,val:string):Observable<Object>{
    return this.httpClient.put(`${this.completeTaskURL}/${container}/${id}/${vari}/${val}`,null);
  }
}
