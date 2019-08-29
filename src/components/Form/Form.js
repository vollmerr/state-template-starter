import React from 'react';
import { Page, Form as ReduxForm, Button } from 'state-template';

import Section1 from './Section1';
import Section2 from './Section2';

export const Form = () => (
  <Page title={'Form'}>
    <ReduxForm
      form={'exampleName'}
      onSubmit={(values) => { alert(JSON.stringify(values, null, 2)); }}
    >
      <Section1 />
      <Section2 />

      <Button
        type={'submit'}
        text={'Submit'}
        variant={'primary'}
      />
    </ReduxForm>
  </Page>
);

export default Form;
