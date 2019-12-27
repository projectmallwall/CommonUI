import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { ViewElement } from '../view-element.interface';
import {CharField } from '../../form/interfaces/char-field';
import { spawn } from 'child_process';


@Component({
  selector: 'char-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.scss']
})
export class CharTextComponent implements ViewElement, OnInit {

  @Input() field:  CharField;
  @Input() data: any;
  @Input() editMode: boolean;
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

  constructor() { }

  ngOnInit(): void {
  }


}
