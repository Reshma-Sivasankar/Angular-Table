import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JSONTableModule } from 'angular-json-table';
import { DataTableComponent } from './data-table/data-table.component';
import { TableDataService } from './table-data.service';

@NgModule({
  declarations: [
    AppComponent,
    DataTableComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    JSONTableModule,
  ],
  providers: [TableDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
