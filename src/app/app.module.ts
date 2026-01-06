import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { EmployeesClientModule } from '../../employees-client/src/modules/employees-client.module';
import { HttpClient } from '@angular/common/http';


@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    EmployeesClientModule,   // <-- all employees + material now work
    AppComponent
  ],
  bootstrap: []
})
export class AppModule {}
