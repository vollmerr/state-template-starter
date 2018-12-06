import React from 'react';
import { reduxForm } from 'redux-form';
import { Button, FieldSelect } from 'state-template';

const nationOptions = [
  { value: 'usa', label: 'USA' },
  { value: 'ca', label: 'Canada' },
  { value: 'uk', label: 'United Kingdom' },
  { value: 'sw', label: 'Sweden' },
];

export class SelectForm extends React.PureComponent {
  onSubmit = (values) => {
    alert(JSON.stringify(values, null, 2));
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <div className={'m-b'}>
          <FieldSelect
            required
            options={nationOptions}
            name={'options_nation'}
            label={'Nation Options'}
          />
        </div>
        <Button type={'submit'} text={'Submit'} />
      </form>
    );
  }
}

const withReduxForm = reduxForm({ form: 'selectForm' });

export default withReduxForm(SelectForm);
