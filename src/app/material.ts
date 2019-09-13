import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule, 
    MatCheckboxModule, 
    MatListModule, 
    MatIconModule, 
    MatToolbarModule, 
    MatSidenavModule 
} from '@angular/material';
import { NgModule } from '@angular/core';


@NgModule({
    imports: [MatButtonModule, 
              MatCheckboxModule, 
              MatListModule, 
              MatIconModule, 
              MatToolbarModule,
              MatSidenavModule,
              FlexLayoutModule
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