import React from 'react';
import renderer from 'react-test-renderer';
import Label from '../../src/components/Label/Label';
describe('Some component', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Label title={'AAAAA'} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
