import React from 'react';
import { reduxForm } from 'redux-form';
import { Button, FieldInput } from 'state-template';

export class BasicForm extends React.PureComponent {
  onSubmit = (values) => {
    alert(JSON.stringify(values, null, 2));
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <FieldInput
          required
          name={'basic_email'}
          label={'Email address'}
          helpText={'email help block'}
        />

        <FieldInput
          required
          type={'password'}
          name={'basic_password'}
          label={'Password'}
          helpText={'password help block'}
        />

        <Button type={'submit'} text={'Submit'} />
      </form>
    );
  }
}

const withReduxForm = reduxForm({ form: 'basicForm' });

export default withReduxForm(BasicForm);
