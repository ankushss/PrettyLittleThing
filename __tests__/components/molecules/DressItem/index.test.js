import React from 'react';
import * as redux from 'react-redux';
import {create} from 'react-test-renderer';
import {DressItem} from '../../../../src/components/molecules';

const mockUseSelector = jest.spyOn(redux, 'useSelector');

const mockItem = {
  id: 1,
  colour: 'mockColor',
  name: 'mockName',
  price: 1,
  img: 'mockImgUrl',
};

describe('DressItem', () => {
  it('matches snapshot', () => {
    const component = create(<DressItem item={mockItem} />);
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('onPress AddToCart', () => {
    mockUseSelector.mockReturnValueOnce(2);
    const component = create(<DressItem item={mockItem} />);
    const button = component.root.findByProps({testID: 'addToCartButton'});
    button.props.onPress();
  });
});
