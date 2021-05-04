import { Component, OnInit } from '@angular/core';
import { data_global, PeriodicElement } from '../../Services/data_global';
import { DialogComponent } from '../dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { element } from 'protractor';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  //Variables for table component on ngOnInit fills with data from data_global 
  data: PeriodicElement[] = [];
  Columns: string[];

  constructor(public data_global: data_global,
    public dialog: MatDialog,
    ) { }

  ngOnInit(): void {
    //Get data from global source data_global and make it usable for tabe component
    this.data = this.data_global.data
    this.Columns = this.data_global.displayedColumns
  }

  // Warning dialog by delete Bucket or Task
  openDialog(position: any) {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '350px',
    });

    //Push selected column to global_data for access data by dialog
    this.data_global.selected_data.push(position)

    dialogRef.afterClosed().subscribe((result) => {
    });
  }
}
