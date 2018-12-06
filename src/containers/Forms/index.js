import React from 'react';

import BasicForm from './BasicForm';
import ContactForm from './ContactForm';
import RadioAndCheckboxesForm from './RadioAndCheckboxesForm';
import SelectForm from './SelectForm';

/* eslint-disable react/prefer-stateless-function */
export class Forms extends React.PureComponent {
  render() {
    return (
      <div>
        <h1>Forms</h1>

        <p>
Form state is saved in redux, under the form key. Open the chrome
          {' '}
          <a href="https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en">redux dev tools</a>
          {' '}
to see the state as you enter data.
        </p>

        <h2>Basic Form</h2>
        <BasicForm />

        <hr />
        <h2>Contact Form</h2>
        <ContactForm />

        <hr />
        <h2>Radios and Checkboxes</h2>
        <RadioAndCheckboxesForm />

        <hr />
        <h2>Selects</h2>
        <SelectForm />

      </div>
    );
  }
}

export default Forms;
