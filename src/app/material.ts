import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule,
    MatCheckboxModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatMenuModule
} from '@angular/material';

import {MatExpansionModule} from '@angular/material/expansion';
// import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { NgModule } from '@angular/core';


@NgModule({
    imports: [MatButtonModule,
              MatCheckboxModule,
              MatListModule,
              MatIconModule,
              MatToolbarModule,
              MatSidenavModule,
              FlexLayoutModule,
              MatExpansionModule,
              MatMenuModule
              // AngularFontAwesomeModule
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
