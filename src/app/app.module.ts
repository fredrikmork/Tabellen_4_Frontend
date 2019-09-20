import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { MatTableModule } from "@angular/material/table";

import { HttpClientModule } from '@angular/common/http'; 

import { AppComponent } from './app.component';
import { NavbarComponent } from './header/navbar.component';
import { TabellenTableComponent } from "./tabellen/tabellen-table.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material';
import { TabellenComponent } from './tabellen/tabellen.component';
import { FooterComponent} from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TabellenComponent,
    TabellenTableComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'tabellen', component: TabellenComponent },
      {path: '', redirectTo: 'tabellen', pathMatch: 'full' },
      {path: '**', redirectTo: 'tabellen', pathMatch: 'full' }
    ]),
    MaterialModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
