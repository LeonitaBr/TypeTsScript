/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';
import {render} from '@testing-library/react-native';

describe('App', () => {
  test('should render successfully', () => {
    render(<App />);
    // wrapper.getByTestId('app');
  });
});
