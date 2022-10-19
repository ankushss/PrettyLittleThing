import React from 'react';
import {create} from 'react-test-renderer';
import {Navigator} from '../../src/navigators';

describe('Navigator', () => {
  it('matches snapshot', () => {
    const component = create(<Navigator />);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
