import { Component, ViewChild } from "@angular/core";
import { ITabellen } from "./tabellen";
import { MatSort, MatTableDataSource } from '@angular/material';

export interface TabellenElement {
    category: string;
    name: string;
    quantity: number;
    allDrink: boolean;
}

const TABELLEN_DATA: TabellenElement[] = [
    { category: "Basics", name: 'Innkast', quantity: 3, allDrink: false},
    { category: "Basics", name: 'Utspill', quantity: 3, allDrink: false},
    { category: "Basics", name: 'Corner', quantity: 3, allDrink: false},
    { category: "Basics", name: 'Offside', quantity: 6, allDrink: true},
    { category: "Basics", name: 'Skadebytte', quantity: 10, allDrink: true},
    // New category
    { category: "Goal", name: 'Vanlig', quantity: 6, allDrink: false},
    { category: "Goal", name: 'Scorpion', quantity: 80, allDrink: false}
];

@Component({
    selector: 'tabellen-table',
    templateUrl: './tabellen-table.component.html',
    styleUrls: ['./tabellen-table.component.css']
})


export class TabellenTableComponent {
    pageTitle: string = 'Tabellen';
    tabellen: ITabellen[] = [];
    displayedColumns: string [] = ['category', 'name', 'quantity', 'allDrink'];
    dataSource = new MatTableDataSource(TABELLEN_DATA);

    @ViewChild(MatSort, {static: true}) sort: MatSort;

    ngOnInit() {
        this.dataSource.sort = this.sort;
    }
}

