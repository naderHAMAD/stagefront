import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProcessService } from '../process.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  id: string;
  container: string | null;
  obj: Object;
  str: string;
  ch: string[];
  range: number[] = [];
  name: string;
  name1: String[] = [];
  constructor(private route: ActivatedRoute, private processService: ProcessService, private router: Router) { }

  ngOnInit(): void {
    this.container = "";
    this.id =this.route.snapshot.params["id"];
    this.container = localStorage.getItem("container");
    this.processService.getTaskList(this.id).subscribe(data => {
      this.obj = data;
      this.str = this.obj.toString();
      this.ch = this.str.split(',');
      for (let i = 0; i < this.ch.length; i++) {
        this.range[i] = i;
        this.processService.getTaskName(this.container, this.ch[i]).subscribe(data => {
          this.obj = data;

          this.name = this.obj.toString();

          this.name1[i] = this.name;

        });
      }
    });
  }
  doTask(id: string, name: String) {
    console.log(name);
    console.log(id);
    if (name == "Evaluation Administratif") {
      this.router.navigate(["eval-admin/", id]);
    }else if (name == "Evaluation Technique") 
      {
      this.router.navigate(['eval-tech/', id]);
      } else if (name == "Evaluation Financiaire") {
      this.router.navigate(['eval-fin/', id]);
    }
  }

}
