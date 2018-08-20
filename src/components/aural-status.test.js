import React from 'react';
import {shallow} from 'enzyme';

import AuralStatus from './aural-status';

describe('AuralStatus', () => {
  it('should render without crashing', () => {
    shallow(<AuralStatus />);
  });
  it('always renders a `p` tag', () => {
    const pTag = shallow(<AuralStatus />).find('p');
    expect(pTag.length).toBeGreaterThan(0);
  });
});
