import React from 'react';
import {shallow, mount} from 'enzyme';

import TopNav from './top-nav';

describe('TopNav', () => {
  it('should render without crashing', () => {
    shallow(<TopNav />);
  });
  it('should call onNewGame when new game is clicked', () => {
    const newGameCallback = jest.fn();
    const newGameWrapper = shallow(<TopNav onRestartGame={newGameCallback} />);
    const link = newGameWrapper.find('.new');
    link.simulate('click', {
      preventDefault() {}
    });
    expect(newGameCallback).toHaveBeenCalled();
  });
  it('should call generateAuralUpdate when state of game is clicked', () => {
    const auralUpdateCallback = jest.fn();
    const auralWrapper = shallow(<TopNav onGenerateAuralUpdate={auralUpdateCallback} />);
    const link = auralWrapper.find('.status-link');
    link.simulate('click', {
      preventDefault() {}
    });
    expect(auralUpdateCallback).toHaveBeenCalled();
  });
});
