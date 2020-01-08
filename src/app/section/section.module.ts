import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';

import { ElementsModule } from '../elements/elements.module';
import { SectionComponent } from './section/section.component';



@NgModule({
  declarations: [SectionComponent],
  imports: [
    SharedModule,
    ElementsModule
  ],
  exports: [SectionComponent]
})
export class SectionModule { }
