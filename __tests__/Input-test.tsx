import React from 'react';
import {render} from '@testing-library/react-native';
import Input from '../src/components/Input/Input';

it('renders default component', () => {
  const {getByPlaceholderText} = render(
    <Input
      textValue={'AAAA'}
      onTextChanged={() => {}}
      placeHolder={'placeholder'}
    />,
  );
  getByPlaceholderText('placeholder');
});
