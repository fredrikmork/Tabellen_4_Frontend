import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component({
    selector: ('tabellen'),
    templateUrl: './tabellen.component.html',
    styleUrls: ['./tabellen.component.css']
})

export class TabellenComponent implements OnInit {
    pageTitle = 'Tabellen';
    rules =  undefined;

    constructor(private http: HttpClient) {}

    ngOnInit() {
        this.http.get('api/rules/rules.json').subscribe(
          data => {
            this.rules = data;
            console.log(this.rules);
          },
          (err: HttpErrorResponse) => {
            console.log (err.message);
          }
        );
  }

  getRulesFromCategory(category: any) {
    return this.rules.filter(rule => rule.category.toLowerCase() === category);
  }

}
