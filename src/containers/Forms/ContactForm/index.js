import React from 'react';
import { reduxForm } from 'redux-form';
import { Button, FieldInput } from 'state-template';

export class ContactForm extends React.PureComponent {
  onSubmit = (values) => {
    alert(JSON.stringify(values, null, 2));
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <div className={'group'}>
          <FieldInput
            required
            className={'half'}
            name={'contact_name'}
            label={'Name'}
            helpText={'name help block'}
          />

          <FieldInput
            required
            type={'email'}
            className={'half'}
            name={'contact_email'}
            label={'Email Address'}
            helpText={'email help block'}
          />
        </div>

        <FieldInput
          type={'textarea'}
          name={'contact_message'}
          label={'Your Message'}
          helpText={'message help block'}
        />

        <Button type={'submit'} text={'Submit'} variant={'primary'} />
      </form>
    );
  }
}

const withReduxForm = reduxForm({ form: 'contactForm' });

export default withReduxForm(ContactForm);
