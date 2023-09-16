import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Process } from '../process';
import { ProcessService } from '../process.service';

@Component({
  selector: 'app-get-process',
  templateUrl: './get-process.component.html',
  styleUrls: ['./get-process.component.css']
})
export class GetProcessComponent implements OnInit {
  id:number;
  process:Process;

  constructor(private route:ActivatedRoute,private processService:ProcessService) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.process=new Process();
    this.processService.getProcessById(this.id).subscribe(data=>{this.process=data;});
    
  }

}
