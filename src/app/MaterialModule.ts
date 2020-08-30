import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import{MatInputModule} from '@angular/material/input';
import{MatFormFieldModule} from '@angular/material/form-field';
import {MatSnackBarModule} from '@angular/material/snack-bar';


@NgModule({
  imports: [MatButtonModule,MatFormFieldModule,
    MatInputModule,MatSnackBarModule],
  exports: [MatButtonModule,MatFormFieldModule,
    MatInputModule,MatSnackBarModule]
})
export class MaterialModule {
}
