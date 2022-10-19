import React from 'react';
import {create} from 'react-test-renderer';
import {Loader} from '../../../../src/components/atoms';

describe('Loader', () => {
  it('matches snapshot', () => {
    const component = create(<Loader />);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
