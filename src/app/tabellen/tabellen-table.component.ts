import { Component, ViewChild, Input } from "@angular/core";
import { MatSort} from '@angular/material';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";


@Component({
    selector: 'tabellen-table',
    templateUrl: './tabellen-table.component.html',
    styleUrls: ['./tabellen-table.component.css']
})


export class TabellenTableComponent {
    pageTitle: string = 'Tabellen';
    displayedColumns: string [] = ['name', 'quantity', 'allDrink'];
    test: string;
    @Input() dataSource;

    
    constructor(private http: HttpClient) {}

    @ViewChild(MatSort, {static: true}) sort: MatSort;

    ngOnInit() { 
      console.log(this.dataSource);
      this.test= this.dataSource[0].category;
      console.log("Denne er: " + this.test);
    }

  logg(){
    console.log("hei");
   
  }

 
}

