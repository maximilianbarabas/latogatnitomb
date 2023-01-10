import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableComponent } from './table/table.component';
import { GitComponent } from './tomb/tomb.component';

const routes: Routes = [
  {path: "table", component: TableComponent},
  {path: "git", component: GitComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
