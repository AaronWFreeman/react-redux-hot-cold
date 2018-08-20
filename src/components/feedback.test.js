import React from 'react';
import {shallow} from 'enzyme';

import Feedback from './feedback';

describe('Feedback', () => {
  it('should render without crashing', () => {
    shallow(<Feedback />);
  });
  it('should render some feedback', () => {
    const test_feedback = 'Hey you, yah you!';
    const wrapper = shallow(<Feedback feedback={test_feedback}/>);
    expect(wrapper.contains(test_feedback)).toEqual(true);
  });
});
