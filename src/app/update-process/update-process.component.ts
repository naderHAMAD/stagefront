import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Process } from '../process';
import { ProcessService } from '../process.service';
import { FileUploadService } from '../services/file-upload.service';

@Component({
  selector: 'app-update-process',
  templateUrl: './update-process.component.html',
  styleUrls: ['./update-process.component.css']
})
export class UpdateProcessComponent implements OnInit {
  selectedFiles?: FileList;
  currentFile?: File;
  progress = 0;
  message = '';
  fileInfos?: Observable<any>;

  process:Process=new Process();
  id :number;
  constructor(private processService :ProcessService, private route : ActivatedRoute,private routerr:Router,
    private uploadService:FileUploadService) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.processService.getProcessById(this.id).subscribe(data =>{
      this.process=data},error=>console.log(error)
      );
  }

  saveProcess(){
    this.processService.createWorkflow(this.process).subscribe(data =>{
      console.log(data);
      this.goToWorkflowList();
    },error=>console.error());
  }
  onSubmit(){
    console.log(this.process.idWorkflow);
    this.processService.updateProcess(this.id,this.process).subscribe(data=>{
      this.goToWorkflowList();
    },error=>console.log(error));
  }
  goToWorkflowList(){
    this.routerr.navigate(['/processes'])
  }
  selectFile(event: any): void {
    this.selectedFiles = event.target.files;
  }

  upload(): void {
    this.progress = 0;
    if (this.selectedFiles) {
      const file: File | null = this.selectedFiles.item(0);
      if (file) {
        this.currentFile = file;
        this.uploadService.upload(this.currentFile).subscribe(
          (event: any) => {
            if (event.type === HttpEventType.UploadProgress) {
              this.progress = Math.round(100 * event.loaded / event.total);
            } else if (event instanceof HttpResponse) {
              this.message = event.body.message;
              this.fileInfos = this.uploadService.getFiles();
            }
          },
          (err: any) => {
            console.log(err);
            this.progress = 0;
            if (err.error && err.error.message) {
              this.message = err.error.message;
            } else {
              this.message = 'Could not upload the file!';
            }
            this.currentFile = undefined;
          });
      }
      this.selectedFiles = undefined;
    }
  }

}
