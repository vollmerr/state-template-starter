import React from 'react';
import { reduxForm } from 'redux-form';
import { Button, FieldRadioButtons, FieldCheckboxes } from 'state-template';

const nationOptions = [
  { value: 'usa', label: 'USA' },
  { value: 'ca', label: 'Canada' },
  { value: 'uk', label: 'United Kingdom' },
  { value: 'sw', label: 'Sweden' },
];

export class RadioAndCheckboxesForm extends React.PureComponent {
  onSubmit = (values) => {
    alert(JSON.stringify(values, null, 2));
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <div className={'m-b'}>
          <FieldRadioButtons
            required
            options={nationOptions}
            name={'radio_nation'}
            label={'Nation Radios'}
          />
          <FieldRadioButtons
            required
            variant={'highlight'}
            options={nationOptions}
            name={'radio_nation_styled'}
            label={'Styled Nation Radios'}
          />
        </div>

        <div className={'m-b'}>
          <FieldCheckboxes
            required
            options={nationOptions}
            name={'check_nation'}
            label={'Nation Checkboxes'}
          />
          <FieldCheckboxes
            required
            variant={'primary'}
            options={nationOptions}
            name={'check_nation_styled'}
            label={'Styled Nation Checkboxes'}
          />
        </div>
        <Button type={'submit'} text={'Submit'} variant={'primary'} />
      </form>
    );
  }
}

const withReduxForm = reduxForm({ form: 'radioAndCheckboxesForm' });

export default withReduxForm(RadioAndCheckboxesForm);
