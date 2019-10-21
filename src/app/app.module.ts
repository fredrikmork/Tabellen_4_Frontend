import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { MatTableModule } from "@angular/material/table";
import { MatSidenavModule } from '@angular/material/sidenav';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'; 

import { AuthenticationService } from './profile/authentication.service';

import { AppComponent } from './app.component';
import { NavbarComponent } from './header/navbar.component';
import { TabellenTableComponent } from "./tabellen/tabellen-table.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material';
import { TabellenComponent } from './tabellen/tabellen.component';
import { FooterComponent} from './footer/footer.component';
import { HelpComponent } from './help/help.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TabellenComponent,
    TabellenTableComponent,
    HelpComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot([
      //{path: 'om', component: AboutComponent },
      {path: 'help', component: HelpComponent },
      {path: 'tabellen', component: TabellenComponent },
      {path: '', redirectTo: 'tabellen', pathMatch: 'full' },
      {path: '**', redirectTo: 'tabellen', pathMatch: 'full' }
    ]),
    MaterialModule,
    MatSidenavModule,
    MatTableModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features
    NgbModule
  ],
  exports:[RouterModule],
  providers: [AuthenticationService],
  bootstrap: [AppComponent, ]
})
export class AppModule { }
