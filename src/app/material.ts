import { MatButtonModule, MatCheckboxModule, MatListModule } from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [MatButtonModule, MatCheckboxModule, MatListModule],
    exports: [MatButtonModule, MatCheckboxModule, MatListModule],
})
export class MaterialModule { }