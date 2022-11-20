import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateTaskComponent } from './create-task/create-task.component';
import { ListArchivedTaskComponent } from './list-archived-task/list-archived-task.component';

const routes: Routes = [
  { path: '',redirectTo: 'createTask',pathMatch: 'full' },
 { path: 'createTask', component: CreateTaskComponent },
 { path: 'archivedTask', component:  ListArchivedTaskComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
