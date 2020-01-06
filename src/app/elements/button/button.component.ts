import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { ViewElement } from '../view-element.interface';
import {Button } from '../../form/interfaces/button';

@Component({
  selector: 'cui-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.sass'],
});

export class ButtonComponent implements ViewElement, OnInit {

  @Input() field:  Button;
  @Input() data: any;
  @Input() editMode: boolean;
  @Output('dataChange') private _dataChange = new EventEmitter<String>();

  public dataChange(): EventEmitter<String> {
    return this._dataChange;
  }

  public eventAction($event) {
    if (event.type === 'submit') {

    } else if (event.type === 'focusout') {

    } else if (event.type === 'click') {

    }
  }

  constructor() { }

  ngOnInit(): void {

  }


}
