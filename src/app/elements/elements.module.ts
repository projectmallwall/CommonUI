import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CharTextComponent } from './input-text/input-text.component';


@NgModule({
  declarations: [CharTextComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [CharTextComponent]
})
export class ElementsModule { }
