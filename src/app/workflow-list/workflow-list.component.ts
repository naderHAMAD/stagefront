import { Container } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit } from '@angular/core';
import { Process } from '../process';
import { ProcessService } from '../process.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-workflow-list',
  templateUrl: './workflow-list.component.html',
  styleUrls: ['./workflow-list.component.css']
})
export class WorkflowListComponent implements OnInit {
  str:string="omar,fki,1996";
  str1:string[];
  priv:boolean;
  processes: Process[];
  id: number;
  process: Process;
  obj: object;
  constructor(private processService:ProcessService,private router:Router) { }

  ngOnInit(): void {
    
    this.getProcesses();
    if (localStorage.getItem("role")!="admin"){
      this.priv=true;
    }
    this.str1=this.str.split(',');
  }
  private getProcesses() {
    this.processService.getProcessesList().subscribe(data =>{
      this.processes=data;
    });
  }

  updateProcess(id:number){
    this.router.navigate(['update-process/',id])
  }

  deleteProcess(id:number){
    this.processService.deleteProcess(id).subscribe(data =>{console.log(data);this.getProcesses()});
  }
  processDetails(id:Number){
    this.router.navigate(['get-process/',id])
  }
  processExecute(id:number){
    str:String;
    this.id = id;
    this.process = new Process();
    this.processService.getProcessById(this.id).subscribe(data => {
      this.process = data;
      this.processService.startProcess(this.process.container_id, this.process.process_id).subscribe(data => {
        console.log(data);
        this.obj=data;
        Swal.fire({
          title: "Processus Lancé avec succés",
          html: "Visiter la liste des intances pour plus des détails "+this.obj,
          timer: 8000,
          timerProgressBar: true,
         
        }).then((result) => {
          /* Read more about handling dismissals below */
          if (result.dismiss === Swal.DismissReason.timer) {
            console.log('I was closed by the timer');
          }
          
        });

      },error=>console.error());
    });    
  }
  listInstances(id:Number){
    this.router.navigate(['run/',id]);
    
  }
}
