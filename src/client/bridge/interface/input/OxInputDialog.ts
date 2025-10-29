import lib from "@overextended/ox_lib/client";
import {InputDialog} from "./InputDialog";

type Icon = string;
export interface OxBaseInput {
  type?: 'input' | 'number' | 'checkbox' | 'select' | 'multi-select' | 'slider' | 'color' | 'date' | 'date-range' | 'time' | 'textarea';
  label: string;
}
export interface OxInputProps extends OxBaseInput {
  type?: 'input';
  description?: string;
  placeholder?: string;
  icon?: Icon;
  required?: boolean;
  disabled?: boolean;
  default?: string;
  password?: boolean;
  min?: number;
  max?: number;
}
export interface OxNumberProps extends OxBaseInput {
  type: 'number';
  description?: string;
  placeholder?: string;
  icon?: Icon;
  required?: boolean;
  disabled?: boolean;
  default?: number;
  min?: number;
  max?: number;
  precision?: number;
  step?: number;
}
export interface OxCheckboxProps extends OxBaseInput {
  type: 'checkbox';
  checked?: boolean;
  disabled?: boolean;
  required?: boolean;
}
export interface OxSelectProps extends OxBaseInput {
  type: 'select' | 'multi-select';
  options: {
    value: string;
    label?: string;
  }[];
  description?: string;
  placeholder?: string;
  icon?: Icon;
  required?: boolean;
  disabled?: boolean;
  default?: string | string[];
  clearable?: boolean;
  searchable?: boolean;
  maxSelectedValues?: number;
}
export interface OxSliderProps extends OxBaseInput {
  type: 'slider';
  placeholder?: string;
  icon?: Icon;
  required?: boolean;
  disabled?: boolean;
  default?: number;
  min?: number;
  max?: number;
  step?: number;
}
export interface OxColorProps extends OxBaseInput {
  type: 'color';
  description?: string;
  placeholder?: string;
  icon?: Icon;
  required?: boolean;
  disabled?: boolean;
  default?: string;
  format?: 'hex' | 'hexa' | 'rgb' | 'rgba' | 'hsl' | 'hsla';
}
export interface OxDateProps extends OxBaseInput {
  type: 'date';
  description?: string;
  icon?: Icon;
  required?: boolean;
  disabled?: boolean;
  default?: string | true;
  format?: string;
  returnString?: boolean;
  clearable?: boolean;
  min?: string;
  max?: string;
}
export interface OxDateRangeProps extends OxBaseInput {
  type: 'date-range';
  description?: string;
  icon?: Icon;
  required?: boolean;
  disabled?: boolean;
  default?: [string, string];
  format?: string;
  returnString?: boolean;
  clearable?: boolean;
}
export interface OxTimeProps extends OxBaseInput {
  type: 'time';
  description?: string;
  icon?: Icon;
  required?: boolean;
  disabled?: boolean;
  default?: string;
  format?: '12' | '24';
  clearable?: boolean;
}
type RowInput = OxInputProps | OxNumberProps | OxCheckboxProps | OxSelectProps | OxSliderProps | OxColorProps | OxDateProps | OxDateRangeProps | OxTimeProps;

export interface OxInputDialogTable {
  heading: string;
  rows: string[] | RowInput[];
  options: {
    allowCancel?: boolean;
  }
}

export class OxInputDialog extends InputDialog {

  constructor(readonly inputDialog: OxInputDialogTable) {
    super();
  }

  async doInputDialog(): Promise<any> {
    return await lib.inputDialog(this.inputDialog.heading, this.inputDialog.rows, this.inputDialog.options);
  }

  async closeInputDialog(): Promise<any> {
    return await lib.closeInputDialog();
  }
}
