import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddWorkflowComponent } from './add-workflow/add-workflow.component';
import { EvalAdminComponent } from './eval-admin/eval-admin.component';
import { EvalFinComponent } from './eval-fin/eval-fin.component';
import { EvalTechComponent } from './eval-tech/eval-tech.component';
import { GetProcessComponent } from './get-process/get-process.component';
import { LoginComponent } from './login/login.component';
import { TaskListComponent } from './task-list/task-list.component';
import { UpdateProcessComponent } from './update-process/update-process.component';
import { WfRunComponent } from './wf-run/wf-run.component';
import { WorkflowListComponent } from './workflow-list/workflow-list.component';


const routes: Routes = [
  {path:'processes',component:WorkflowListComponent},
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'add-workflow',component:AddWorkflowComponent},
  {path:'update-process/:id',component:UpdateProcessComponent},
  {path:'get-process/:id',component:GetProcessComponent},
  {
    path:'login',component:LoginComponent
  },
  {
    path:'run/:id',component:WfRunComponent
  },
  {
    path:'task-list/:id',component:TaskListComponent
  },
  {
    path:'eval-admin/:id',component:EvalAdminComponent
  },
  {
    path:'eval-fin/:id',component:EvalFinComponent
  },
  {
    path:'eval-tech/:id',component:EvalTechComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
