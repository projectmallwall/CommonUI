import {Field} from './field';

export class Button extends Field<string> {
  buttonType : string;
  buttonSize: string;
  buttonIcon: string;
  disabbled: boolean;

  constructor(options : {
    name?: string,
    label?: string,
    type?: string,
    buttonType?: string,
    id?: string,
    buttonIcon?: string,
    disbled?: boolean
  } = {}) {
    super(options);
    this.buttonType = options.buttonType;
    this.buttonIcon = options.buttonIcon;
    this.disabbled = options.disbled;
  }
  setFocus() {
    const ele = document.getElementById(this.id.toString());
    if(ele) {
      ele.focus();
    }
  }
}
