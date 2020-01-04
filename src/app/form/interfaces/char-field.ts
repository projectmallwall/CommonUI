import { Field } from "./field";

export class CharField extends Field<string> {
  inputType : string;
  displayAsText: boolean;
  value: string;
  width: number;
  height: number;
  rowNum: number;
  showCharLengthUnit: boolean;
  maxChar: number;
  placeHolder: string;
  constructor(options :{
    name?: string;
    label?: string;
    type?: string;
    inputType?: string;
    id?:string;
    value?: string;
    placeHolder?: string;
    height?: number;
    width?: number;
    rowNum?: number;
    showCharLengthUnit?: boolean;
    maxChar?: number;
    } = {}) {
    super(options);
    this.inputType = options.inputType;
    this.width = options.width;
    this.height = options.height;
    this.maxChar = options.maxChar;
    this.rowNum = options.rowNum;
    this.placeHolder = options.placeHolder;
    this.showCharLengthUnit = options.showCharLengthUnit;

  }
  getValue(): string {
    if (this.value === undefined) {
      return null;
    }
    return this.value;
  }

}
