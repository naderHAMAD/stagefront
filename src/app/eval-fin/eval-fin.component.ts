import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProcessService } from '../process.service';

@Component({
  selector: 'app-eval-fin',
  templateUrl: './eval-fin.component.html',
  styleUrls: ['./eval-fin.component.css']
})
export class EvalFinComponent implements OnInit {
  checkbox:any;
  EA:boolean;
  id: string;
  constructor(private route: ActivatedRoute, private processService: ProcessService, private router: Router) { }

  ngOnInit(): void {
    this.id= this.route.snapshot.params['id'];
    console.log(this.id);
    this.processService.startTask(localStorage.getItem("container"),this.id).subscribe(data=>{
      console.log("task started");
    });
    this.checkbox=document.getElementById("EF") as HTMLInputElement;
  }
  onSubmit(){
    this.EA=this.checkbox?.checked;
    this.processService.completeTask(localStorage.getItem("container"),this.id,"EF",String(this.EA)).subscribe(data=>{
      console.log("task completed");
      this.router.navigate(["processes/"]);
    });
    
  }

}
