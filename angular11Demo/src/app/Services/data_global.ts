export interface PeriodicElement {
    name: string;
    position: number;
    weight: number;
    symbol: string;
  }

  export class data_global {
    //Displayed columns
    displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'action'];

    //Data from request for global use
    data: PeriodicElement[] = [];

    //Selected data from table for dialog import
    selected_data: PeriodicElement[]= [];
  }


