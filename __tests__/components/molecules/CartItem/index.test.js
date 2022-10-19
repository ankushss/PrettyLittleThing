import React from 'react';
import {create} from 'react-test-renderer';
import {CartItem} from '../../../../src/components/molecules';

const mockItem = {
  id: 1,
  colour: 'mockColor',
  name: 'mockName',
  price: 1,
  img: 'mockImgUrl',
  quantity: 1,
};

describe('CartItem', () => {
  it('matches snapshot', () => {
    const component = create(<CartItem item={mockItem} />);
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('onPress Add', () => {
    const component = create(<CartItem item={mockItem} />);
    const addButton = component.root.findByProps({testID: 'addButton'});
    addButton.props.onPress();
  });

  it('onPress Remove', () => {
    const component = create(<CartItem item={mockItem} />);
    expect(component.toJSON()).toMatchSnapshot();
    const removeButton = component.root.findByProps({testID: 'removeButton'});
    removeButton.props.onPress();
  });
});
