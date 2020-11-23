import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatDatepickerModule,
    MatAutocompleteModule,
    MatInputModule,
    MatFormFieldModule
  ],
  exports:[
    MatDatepickerModule,
    MatAutocompleteModule,
    MatInputModule,
    MatFormFieldModule
  ]
})

export class MaterialModule { }