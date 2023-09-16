import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProcessService } from '../process.service';

@Component({
  selector: 'app-eval-tech',
  templateUrl: './eval-tech.component.html',
  styleUrls: ['./eval-tech.component.css']
})
export class EvalTechComponent implements OnInit {
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
    this.checkbox=document.getElementById("ET") as HTMLInputElement;
  }

  onSubmit(){
    this.EA=this.checkbox?.checked;
    this.processService.completeTask(localStorage.getItem("container"),this.id,"ET",String(this.EA)).subscribe(data=>{
      console.log("task completed");
      this.router.navigate(["processes/"]);
    });
    
  }

}
