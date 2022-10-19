import React from 'react';
import {create} from 'react-test-renderer';
import {BottomTab} from '../../../src/navigators/BottomTab';

describe('BottomTab', () => {
  it('matches snapshot', () => {
    const component = create(<BottomTab />);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
