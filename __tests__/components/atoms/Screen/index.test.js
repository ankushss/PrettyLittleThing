import React from 'react';
import {create} from 'react-test-renderer';
import {Screen} from '../../../../src/components/atoms';

describe('Screen', () => {
  it('matches snapshot', () => {
    const component = create(<Screen />);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
