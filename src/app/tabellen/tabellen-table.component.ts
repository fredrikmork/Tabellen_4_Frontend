import { Component, ViewChild } from "@angular/core";
import { MatSort, MatTableDataSource } from '@angular/material';
import { NavbarComponent } from "../header/navbar.component";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";


@Component({
    selector: 'tabellen-table',
    templateUrl: './tabellen-table.component.html',
    styleUrls: ['./tabellen-table.component.css']
})


export class TabellenTableComponent {
    pageTitle: string = 'Tabellen';
    displayedColumns: string [] = ['category', 'name', 'quantity', 'allDrink'];
    dataSource = undefined;
    
    constructor(private http: HttpClient) {}

    @ViewChild(MatSort, {static: true}) sort: MatSort;

    ngOnInit() { 
          this.http.get('api/rules/rules.json').subscribe(
            data => {
              this.dataSource = data;
            },
            (err: HttpErrorResponse) => {
              console.log (err.message);
            }
          );
    }
}

