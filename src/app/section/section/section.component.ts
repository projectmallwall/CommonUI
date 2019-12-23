import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit {
  structuralData: any = {
        id: "section id is compulsory for form",
        type: "content/form",
        col: {
          count: 3,
          ratio: {
            _comment: "Sould add up in multiple of 12 only.",
            lg: "6:3:3",
            md: "6:3:3",
            sm: "12:6:6",
            xs: "12:12:12"
          },
          autoPlace: "true/false"
        },
        fieldList: [{
            name: "customerName",
            type: "text",
            accessor: "customer.name"
          }, {
            name: "address",
            type: "textArea",
            accessor: "customer.address"
          }, {
            name: "gender",
            type: "radio",
            accessor: "customer.gender"
          },
          {
            name: "save",
            type: "submit/cancel/reset",
            formIds: ["section1", "section12"]
          }]
      };;
  /*columnStructure: {
    noOfColumn: number,
    classes: {
      xs: Array<string>,
      sm: Array<string>,
      md: Array<string>,
      lg: Array<string>
    }
  };*/
  columnStructure: any = {};

  constructor() {
  }

  ngOnInit() {
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
      resultArr[index] = "col-" + type + arr[index];
    }

    return resultArr;
  }

  private checkForRequiredParameters(): void {

  }

  private breakColumnForDevices(): void {
    this.checkForRequiredParameters();
    this.columnStructure.noOfColumn = this.convertStringIntoNumber(this.structuralData.col.count);
    this.columnStructure.classes = {};
    if (this.structuralData.col.ratio.xs) {
      this.columnStructure.classes.xs = this.convertColumnRatioIntoClass(this.structuralData.col.ratio.xs.split(':'), 'xs');
    }

    if (this.structuralData.col.ratio.sm) {
      this.columnStructure.classes.sm = this.convertColumnRatioIntoClass(this.structuralData.col.ratio.sm.split(':'), 'sm');
    }

    if (this.structuralData.col.ratio.md) {
      this.columnStructure.classes.md = this.convertColumnRatioIntoClass(this.structuralData.col.ratio.md.split(':'), 'md');
    }

    if (this.structuralData.col.ratio.lg) {
      this.columnStructure.classes.lg = this.convertColumnRatioIntoClass(this.structuralData.col.ratio.lg.split(':'), 'lg');
    }
  }

}
