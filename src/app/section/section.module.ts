import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ElementsModule } from '../elements/elements.module';
import { SectionComponent } from './section/section.component';



@NgModule({
  declarations: [SectionComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ElementsModule
  ],
  exports: [SectionComponent]
})
export class SectionModule { }
