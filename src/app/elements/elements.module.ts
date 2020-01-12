import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { CharTextComponent } from './char-text/char-text.component';
import { ButtonComponent } from './button/button.component';


@NgModule({
  declarations: [CharTextComponent, ButtonComponent],
  imports: [
    SharedModule
  ],
  exports: [CharTextComponent, ButtonComponent]
})
export class ElementsModule { }
