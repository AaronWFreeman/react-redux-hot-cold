import React from 'react';
import {shallow, mount} from 'enzyme';

import GuessList from './guess-list';

describe('GuessList', () => {
  it('should render without crashing', () => {
    shallow(<GuessList guesses={[]} />);
  });
  it('renders a list of guesses', () => {
    const values = [10, 22, 33];
    const listWrapper = shallow(<GuessList guesses={values} />);
    const items = listWrapper.find('li');
    expect(items.length).toEqual(values.length);
    values.forEach((value, index) => {
      expect(items.at(index).text()).toEqual(value.toString());
    });
  });
});
