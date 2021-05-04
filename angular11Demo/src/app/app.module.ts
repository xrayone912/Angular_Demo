import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableComponent } from './components/table/table.component';
import { DialogComponent } from './components/dialog/dialog.component';

// Import DataService & data_gobal for declare providers
import { DataService } from './Services/data.service';
import { data_global } from './Services/data_global'

// Material Import
import {MatTableModule} from '@angular/material/table'; 
import {MatButtonModule} from '@angular/material/button'; 
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    DialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatButtonModule,
    MatDialogModule,
  ],

  // Declare Service as pproviders for global use 
  providers: [DataService, data_global, MatDialogModule,],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
