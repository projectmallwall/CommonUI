import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ViewElement } from '../view-element.interface';
import { FormsService } from '@shared/services/forms.service';
import { CharField } from '../../form/interfaces/char-field';

@Component({
  selector: 'cui-char-text',
  templateUrl: './char-text.component.html',
  styleUrls: ['./char-text.component.scss']
})

export class CharTextComponent implements ViewElement, OnInit {

 // @Input() field:  CharField;
  @Input() data: CharField;
  @Input() editMode: boolean;
  formGroupObj: FormGroup;
  @Output('dataChange') private _dataChange = new EventEmitter<String>();

  public dataChange(): EventEmitter<String> {
    return this._dataChange;
  }

  public eventAction($event) {
    if (event.type === 'focus') {

    } else if (event.type === 'focusout') {

    } else if (event.type === 'click') {

    }
  }

  constructor(private formService: FormsService) { }

  ngOnInit(): void {
    this.formGroupObj = this.formService.createInputControl(this.data.formName, this.data.name, []);
  }


}
