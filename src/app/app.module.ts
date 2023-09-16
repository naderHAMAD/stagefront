import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WorkflowListComponent } from './workflow-list/workflow-list.component';
import { AddWorkflowComponent } from './add-workflow/add-workflow.component';
import { FormsModule } from '@angular/forms';
import { UpdateProcessComponent } from './update-process/update-process.component';
import { GetProcessComponent } from './get-process/get-process.component';
import { LoginComponent } from './login/login.component';
import { WfRunComponent } from './wf-run/wf-run.component';
import { TaskListComponent } from './task-list/task-list.component';
import { EvalAdminComponent } from './eval-admin/eval-admin.component';
import { EvalTechComponent } from './eval-tech/eval-tech.component';
import { EvalFinComponent } from './eval-fin/eval-fin.component';

@NgModule({
  declarations: [
    AppComponent,
    WorkflowListComponent,
    AddWorkflowComponent,
    UpdateProcessComponent,
    GetProcessComponent,
    LoginComponent,
    WfRunComponent,
    TaskListComponent,
    EvalAdminComponent,
    EvalTechComponent,
    EvalFinComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
