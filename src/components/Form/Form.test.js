import React from 'react';
import { shallow } from 'enzyme';

import Form from './Form';

const props = {};

let wrapper;
describe('Form', () => {
  beforeEach(() => {
    wrapper = shallow(<Form {...props} />);
  });

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
