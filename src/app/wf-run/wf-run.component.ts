import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';



import { Process } from '../process';
import { ProcessService } from '../process.service';

@Component({
  selector: 'app-wf-run',
  templateUrl: './wf-run.component.html',
  styleUrls: ['./wf-run.component.css']
})
export class WfRunComponent implements OnInit {
  id: number;
  process: Process;
  p:Process;
  processes:Process[];
  idexec: Number;
  obj:Object;
  str:string;
  i:string;
  ch:string[];
  ch1:object;
  state:string;
  state1:String[]=[];
  ch2: object;
  date: Date[]=[];
  range:number[]=[];
  constructor(private route: ActivatedRoute, private processService: ProcessService,private router:Router) { }

  ngOnInit(): void {
   
    this.id=this.route.snapshot.params['id'];
    this.process=new Process();
    this.processService.getProcessById(this.id).subscribe(data=>{
      this.process=data;
      localStorage.setItem("container",this.process.container_id);
      
      this.processService.getProcessInstances(this.process.container_id).subscribe(data=>{
        this.obj=data;
        
        this.str=this.obj.toString();
        this.ch=this.str.split(',');
        
        for (let i = 0; i < this.ch.length; i++) {
          this.range[i]=i;
          
          this.processService.getProcessInstanceState(this.process.container_id,this.ch[i]).subscribe(data=>{
            this.obj=data;
            if(this.obj.toString()=="2"){
              this.state="Completed";
            }else{
              this.state="ACTIVE"
            } this.state1[i]=this.state;
            
          });
          this.processService.getProcessInstanceDate(this.process.container_id,this.ch[i]).subscribe(data=>{
            this.obj=data;
            this.date[i]=new Date(+this.obj.toString()* 1000);        //this.obj.toString();
            
          });
          
        }
        
      });
    });
    
  }

  goToTaskList(id:string){
    localStorage.setItem("ti",String(this.id));
    this.router.navigate(['task-list/',id]);
  }
  
}
  

  



