import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataTableComponent } from './data-table/data-table.component';

const routes: Routes = [
  { path: "", redirectTo: '/lenders', pathMatch: 'full'},
  { path: 'lenders', component: DataTableComponent },
  { path: '**', redirectTo: '/lenders'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
