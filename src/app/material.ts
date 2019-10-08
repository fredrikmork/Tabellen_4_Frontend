import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule, 
    MatCheckboxModule, 
    MatListModule, 
    MatIconModule, 
    MatToolbarModule, 
    MatSidenavModule 
} from '@angular/material';

import {MatExpansionModule} from '@angular/material/expansion';
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
              MatExpansionModule
              //AngularFontAwesomeModule
              ],
    exports: [MatButtonModule, 
              MatCheckboxModule, 
              MatListModule, 
              MatIconModule, 
              MatToolbarModule,
              MatSidenavModule,
              FlexLayoutModule,
              MatExpansionModule
              ],
})
export class MaterialModule { }