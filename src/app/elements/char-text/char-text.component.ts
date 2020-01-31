import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, ControlValueAccessor } from '@angular/forms';
import { ViewElement } from '../view-element.interface';
import { FormsService } from '@shared/services/forms.service';
import { CharField } from '../../form/interfaces/char-field';

@Component({
  selector: 'cui-char-text',
  templateUrl: './char-text.component.html',
  styleUrls: ['./char-text.component.scss']
})

export class CharTextComponent implements ViewElement, OnInit, ControlValueAccessor{

  @Input() fieldObj: CharField;
  @Input() editMode: boolean;
  formGroupObj: FormGroup;
  data: any;
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
    this.formGroupObj = this.formService.createInputControl(this.fieldObj.formName, this.fieldObj.name, []);
  }

  registerOnChange() {

  }

  registerOnTouched() {

  }

  writeValue() {

  }


}
