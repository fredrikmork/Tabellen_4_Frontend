import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule, 
    MatCheckboxModule, 
    MatListModule, 
    MatIconModule, 
    MatToolbarModule, 
    MatSidenavModule 
} from '@angular/material';
//import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { NgModule } from '@angular/core';


@NgModule({
    imports: [MatButtonModule, 
              MatCheckboxModule, 
              MatListModule, 
              MatIconModule, 
              MatToolbarModule,
              MatSidenavModule,
              FlexLayoutModule,
              //AngularFontAwesomeModule
              ],
    exports: [MatButtonModule, 
              MatCheckboxModule, 
              MatListModule, 
              MatIconModule, 
              MatToolbarModule,
              MatSidenavModule,
              FlexLayoutModule
              ],
})
export class MaterialModule { }