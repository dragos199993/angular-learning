import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TasksComponent } from './Tasks/Tasks.component';
import { MessageDetailComponent } from './message-detail/message-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {path: '', redirectTo:'dashboard', pathMatch: 'full'},
  {path: 'task/:id', component:MessageDetailComponent},
  {path: 'tasks', component:TasksComponent},
  {path: 'dashboard', component:DashboardComponent}
]


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
