import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ViewElement } from '../view-element.interface';

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.scss']
})
export class InputTextComponent implements ViewElement, OnInit {

  @Input() data: String;
  @Input() span: Number;
  @Input() editMode: Boolean = false;

  @Output('dataChange') private _dataChange = new EventEmitter<String>();

  public dataChange(): EventEmitter<String> {
    return this._dataChange;
  }

  constructor() { }

  ngOnInit(): void {    
  }

}
