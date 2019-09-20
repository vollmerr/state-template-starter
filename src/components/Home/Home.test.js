import React from 'react';
import { shallow } from 'enzyme';
import { api } from 'state-template';

import { Home } from './Home';

const props = {
  exampleData: [
    { id: 1, value: 'v1' },
    { id: 2, value: 'v2' },
  ],
  lastFetched: 1234567,
  getExampleData: jest.fn(),
};

let wrapper;
let instance;
describe('Home', () => {
  beforeEach(() => {
    wrapper = shallow(<Home {...props} />);
    instance = wrapper.instance();
  });

  it('should load the example data if not already loaded', () => {
    // cache present, no loading happened
    expect(props.getExampleData).not.toBeCalled();
    // cache invalid, loads new data on remount
    jest.spyOn(api, 'shouldFetch').mockReturnValue(true);
    instance.componentDidMount();
    expect(props.getExampleData).toBeCalled();
  });

  it('should render a list of example data', () => {
    expect(wrapper.find('li').length).toBe(props.exampleData.length);
  });
});
