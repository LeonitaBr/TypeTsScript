import React from 'react';
import renderer from 'react-test-renderer';
import Button from '../../src/components/Button/Button';

describe('Some component', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<Button onPressButton={() => {}} title={'AAAA'} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
