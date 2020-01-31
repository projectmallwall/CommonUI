import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { CharTextComponent } from './char-text/char-text.component';
import { StaticTextComponent } from './static-text/static-text.component';
import { DropdownListComponent } from './dropdown-list/dropdown-list.component';


@NgModule({
  declarations: [CharTextComponent, StaticTextComponent, DropdownListComponent],
  imports: [
    SharedModule
  ],
  exports: [CharTextComponent, StaticTextComponent, DropdownListComponent]
})
export class ElementsModule { }
