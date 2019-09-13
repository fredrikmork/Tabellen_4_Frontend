import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { MatTableModule } from "@angular/material/table";

import { AppComponent } from './app.component';
import { NavbarComponent } from './header/navbar.component';
import { TabellenTableComponent } from "./tabellen/tabellen-table.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TabellenTableComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      {path: '', redirectTo: '#', pathMatch: 'full' },
      {path: '**', redirectTo: '#', pathMatch: 'full' }
    ]),
    MaterialModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
