import React from 'react';
import { FieldInput, FieldSelect, FieldComboBox } from 'state-template';

import schema from './schema';

const { section1 } = schema;

const Section1 = () => (
  <div className={'row'}>
    <h2 className={'col-12'}>Section 1</h2>
    <FieldInput {...section1.exampleInput} className={'col-md-6'} />
    <FieldInput {...section1.exampleDate} className={'col-md-6'} />
    <FieldSelect {...section1.exampleSelect} className={'col-md-6'} />
    <FieldComboBox {...section1.exampleCombobox} className={'col-md-6'} />
  </div>
);

export default Section1;
