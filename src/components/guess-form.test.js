import React from 'react';
import {shallow, mount} from 'enzyme';

import GuessForm from './guess-form';

describe('GuessForm', () => {
  it('should render without crashing', () => {
    shallow(<GuessForm />);
  });
  it('should reset the input when the form is submitted', () => {
    const wrapper = mount(<GuessForm />);
    const input = wrapper.find("input[type='number']");
    input.instance().value = 10;
    wrapper.simulate('submit');
    expect(input.instance().value).toEqual('');
  });
});
