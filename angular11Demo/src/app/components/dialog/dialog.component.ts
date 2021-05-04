import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { runInThisContext } from 'node:vm';
import { data_global } from '../../Services/data_global';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  //Data model for dialog component  
 data = {
  name: "",
  position: 0,
  weight: 0,
  symbol: "",
 } 

  constructor(
    public data_global: data_global) { }

  ngOnInit(): void {

    //Oninit set data from data_global selected to table component data model
    this.data_global.selected_data.forEach(element => {
      this.data = element
    });
    
  }

}
