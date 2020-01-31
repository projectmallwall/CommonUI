import { Field } from './field';

export interface DropdownOption {
  name: string;
  value: string;
}

export class DropdownField extends Field<string> {

}
