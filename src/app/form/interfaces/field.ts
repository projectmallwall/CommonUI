export class Field<T> {
  inputType: string
  value: T;
  name: string;
  id: string;
  defaultValue: string;
  required: boolean;
  label: string;
  readonly: boolean;
  disabbled: boolean;
  visible: boolean;
  width: number;
  height: number;
  constructor(options: {
    value?: T,
    name?: string,
    id?: string,
    defaultValue?: string,
    required?: boolean,
    label?: string,
    readonly?: boolean,
    disabled?: boolean,
    visible?: boolean,
  } = {}) {
    this.name = options.name;
    this.id = options.id;
    this.label = options.label;
    this.setValue(options.value);
    this.readonly = options.readonly;
    this.visible = options.visible;
  };
  setValue(value: T | any) {
    this.value = value;
  }

  getValue(): T | any {
    return this.value;
  }

}
