import React from 'react';
import {render} from '@testing-library/react-native';
import Label from '../src/components/Label/Label';

it('renders default component', () => {
  const {getByText} = render(<Label title="aaaa" />);
  getByText('aaaa');
});
