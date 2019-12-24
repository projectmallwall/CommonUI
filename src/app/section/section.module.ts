import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElementsModule } from '../elements/elements.module';
import { SectionComponent } from './section/section.component';



@NgModule({
  declarations: [SectionComponent],
  imports: [
    CommonModule,
    ElementsModule
  ],
  exports: [SectionComponent]
})
export class SectionModule { }
