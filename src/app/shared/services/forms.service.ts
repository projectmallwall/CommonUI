import { Injectable } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormsService {
  private formsArr: [];

  constructor() {
    this.formsArr = [];
  }

  public createForm(formName: string): FormGroup {
    if (!this.formsArr[formName]) {
      (<FormGroup>this.formsArr[formName]) = new FormGroup({});
    }
    return this.formsArr[formName];
  }

  public createInputControl(formName: string, formControlName: string, validators: []): FormGroup {
    this.createForm(formName);
    this.formsArr[formName].addControl(formControlName, new FormControl('Default Name', validators));
    return this.formsArr[formName];
  }

  public getFormList(): [] {
      return this.formsArr;
  }

  public saveForm(formName: String) {

  }
}
