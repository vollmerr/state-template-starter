import { fieldOptions } from 'state-template';

const section1 = {
  exampleInput: {
    required: true,
    name: 'exampleInput',
    label: 'Example Input',
  },
  exampleDate: {
    name: 'exampleDate',
    label: 'Example Date',
  },
  exampleSelect: {
    name: 'exampleSelect',
    label: 'Example Select',
    options: fieldOptions.countyOptionsCA,
  },
  exampleCombobox: {
    name: 'exampleCombobox',
    label: 'Example ComboBox',
    options: fieldOptions.countyOptionsCA,
  },
};

const section2 = {
  exampleRadios: {
    name: 'exampleRadios',
    label: 'Example Radios',
    options: fieldOptions.yesNoOptions,
  },
  exampleCheckboxes: {
    name: 'exampleCheckboxes',
    label: 'Example Checkboxes ',
    options: fieldOptions.yesNoOptions,
  },
};

const schema = {
  section1,
  section2,
};

export default schema;
