import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Process } from '../process';
import { ProcessService } from '../process.service';
import { FileUploadService } from 'src/app/services/file-upload.service';
import { Observable } from 'rxjs';
import { HttpEventType, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-add-workflow',
  templateUrl: './add-workflow.component.html',
  styleUrls: ['./add-workflow.component.css']
})
export class AddWorkflowComponent implements OnInit {
  selectedFiles?: FileList;
  currentFile?: File;
  progress = 0;
  message = '';
  fileInfos?: Observable<any>;

  process:Process=new Process();
  
  constructor(private processService:ProcessService , private router:Router,private uploadService: FileUploadService) { }
  

  ngOnInit(): void {
  }

  saveProcess(){
    this.processService.createWorkflow(this.process).subscribe(data =>{
      console.log(data);
      this.goToWorkflowList();
    },error=>console.error());
  }

  goToWorkflowList(){
    this.router.navigate(['/processes'])
  }

  onSubmit(){
    console.log(this.process.idWorkflow);
    this.saveProcess();
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
