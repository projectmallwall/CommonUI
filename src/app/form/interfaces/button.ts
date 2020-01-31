import {Field} from './field';

export class Button extends Field<string> {
  buttonType : string;
  buttonSize: string;
  buttonIcon: string;
  disabled: boolean;

  constructor(options : {
    name?: string,
    label?: string,
    type?: string,
    buttonType?: string,
    id?: string,
    buttonIcon?: string,
    disabled?: boolean
  } = {}) {
    super(options);
    this.buttonType = options.buttonType;
    this.buttonIcon = options.buttonIcon;
    this.disabled = options.disabled;
  }
  setFocus() {
    const ele = document.getElementById(this.id.toString());
    if(ele) {
      ele.focus();
    }
  }
}
