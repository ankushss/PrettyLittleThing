import React from 'react';
import {create} from 'react-test-renderer';
import {Counter} from '../../../../src/components/atoms';

describe('Counter', () => {
  it('matches snapshot', () => {
    const component = create(
      <Counter onPressAdd={jest.mock()} onPressRemove={jest.mock()} />,
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
});
