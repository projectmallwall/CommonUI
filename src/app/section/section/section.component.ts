import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CharTextComponent } from '@elements/input-text/input-text.component';
import { FormsService } from '@shared/services/forms.service';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit {
  @Input('section') section: any;
  @Input('fields') fields: any;
  formGroupContainer: FormGroup;
  /*columnStructure: {
    noOfColumn: number,
    classes: {
      xs: Array<string>,
      sm: Array<string>,
      md: Array<string>,
      lg: Array<string>
    }
  };*/
  columnStructure: any;
  containSectionChild: boolean;
  requiredParameters: Array<String>;

  constructor(private formService: FormsService) {
    this.columnStructure = {};
    this.containSectionChild = false;
    this.requiredParameters = ['col', 'id'];
  }

  ngOnInit() {
    this.checkForRequiredParameters();
    this.convertDataToLowerCase();
    if (this.section.type === 'form') {
      this.formGroupContainer = this.formService.createForm(this.section.id);
    }
    this.containSectionChild = this.section.sectionList && this.section.sectionList.length ? true: false;
    this.breakColumnForDevices();
  }

  private convertStringIntoNumber(value: string): number {
    let num: number = Number(value);
    if (Number.isNaN(num)) {
      console.log('section ratio number issue');
    }
    return num;
  }

  private convertColumnRatioIntoClass(arr: Array<string>, type: string): Array<string> {
    let resultArr: Array<string> = [];
    for (let index: number = 0; index < arr.length; index++) {
      resultArr[index] = "col-" + type + "-" + arr[index];
    }

    return resultArr;
  }

  private convertDataToLowerCase(): void {
    this.section.type = this.section.type.toLowerCase();
  }

  private checkForRequiredParameters(): void {
    for (let key in this.requiredParameters) {
      if (!this.section.hasOwnProperty(key)) {
        console.log("Missing key - " + key);
      }
    }
  }

  private breakColumnForDevices(): void {
    this.columnStructure.noOfColumn = this.convertStringIntoNumber(this.section.col.count);
    this.columnStructure.classes = {};
    if (this.section.col.ratio.xs) {
      this.columnStructure.classes.xs = this.convertColumnRatioIntoClass(this.section.col.ratio.xs.split(':'), 'xs');
    }

    if (this.section.col.ratio.sm) {
      this.columnStructure.classes.sm = this.convertColumnRatioIntoClass(this.section.col.ratio.sm.split(':'), 'sm');
    }

    if (this.section.col.ratio.md) {
      this.columnStructure.classes.md = this.convertColumnRatioIntoClass(this.section.col.ratio.md.split(':'), 'md');
    }

    if (this.section.col.ratio.lg) {
      this.columnStructure.classes.lg = this.convertColumnRatioIntoClass(this.section.col.ratio.lg.split(':'), 'lg');
    }
  }

  public clickSubmit(): void {
    this.formService.getFormList();
  }

}
