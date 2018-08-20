import React from 'react';
import {shallow} from 'enzyme';

import GuessCount from './guess-count';

describe('GuessCount', () => {
  it('should render without crashing', () => {
    shallow(<GuessCount />);
  });
  it('renders the correct guess', () => {
    const value = 5;
    const wrapper = shallow(<GuessCount guessCount={value} />);
    expect(wrapper.text()).toEqual(`You have made ${value} guesses!`);
  });
});
