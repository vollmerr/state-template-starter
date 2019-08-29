import React from 'react';
import { FieldRadioButtons, FieldCheckboxes } from 'state-template';

import schema from './schema';

const { section2 } = schema;

const Section2 = () => (
  <div className={'row'}>
    <h2 className={'col-12'}>Section 2</h2>
    <FieldRadioButtons {...section2.exampleRadios} className={'col-md-6'} />
    <FieldCheckboxes {...section2.exampleCheckboxes} className={'col-md-6'} />
  </div>
);

export default Section2;
