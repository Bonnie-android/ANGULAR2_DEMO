
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EmployeeListComponent } from './Employee/EmployeeList.component';
import { EmployeeCountComponent } from './Employee/EmployeeCount.component';

@NgModule({
    imports: [BrowserModule, FormsModule ],
    declarations: [AppComponent, EmployeeListComponent, EmployeeCountComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
