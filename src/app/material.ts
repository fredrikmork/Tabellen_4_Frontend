import { MatButtonModule, MatCheckboxModule, MatListModule, MatIconModule, MatToolbarModule } from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [MatButtonModule, MatCheckboxModule, MatListModule, MatIconModule, MatToolbarModule],
    exports: [MatButtonModule, MatCheckboxModule, MatListModule, MatIconModule, MatToolbarModule],
})
export class MaterialModule { }