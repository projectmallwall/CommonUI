import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { ViewElement } from '../view-element.interface';
import {Button } from '../../form/interfaces/button';
import { FormsService } from '@shared/services/forms.service';


@Component({
  selector: 'cui-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.sass'],
})
export class ButtonComponent implements OnInit {

  @Input() editMode?: boolean;
  @Input() formName?: String;

  public eventAction($event) {
    if (event.type === 'submit') {

    } else if (event.type === 'focusout') {

    } else if (event.type === 'click') {
      this.formService.saveForm(this.formName);

    }
  }

  constructor(private formService: FormsService) { }

  ngOnInit(): void {
    // this.formGroupObj = this.formService.createInputControl(this.fieldObj.formName, this.fieldObj.name, []);
  }


}
