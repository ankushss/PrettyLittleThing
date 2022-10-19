import React from 'react';
import {create} from 'react-test-renderer';
import {Button} from '../../../../src/components/atoms';

describe('Button', () => {
  it('matches snapshot with contained variant', () => {
    const component = create(<Button onPress={jest.mock()}>Test</Button>);
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('matches snapshot with outlined variant', () => {
    const component = create(
      <Button variant="outlined" onPress={jest.mock()}>
        Test
      </Button>,
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
});
