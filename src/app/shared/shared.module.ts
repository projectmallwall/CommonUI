import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MessageComponent } from './message/message.component';


@NgModule({
  declarations: [MessageComponent],
  imports: [
    CommonModule,
    NgbModule
  ],
  exports: [MessageComponent, NgbModule, CommonModule, FormsModule, ReactiveFormsModule]
})
export class SharedModule { }
