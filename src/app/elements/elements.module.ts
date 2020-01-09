import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { CharTextComponent } from './char-text/char-text.component';


@NgModule({
  declarations: [CharTextComponent],
  imports: [
    SharedModule
  ],
  exports: [CharTextComponent]
})
export class ElementsModule { }
