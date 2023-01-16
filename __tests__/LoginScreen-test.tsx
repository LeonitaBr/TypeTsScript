import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import LoginScreen from '../src/screens/LoginScreen';

it('renders correctly', () => {
  render(<LoginScreen />);
});
// it('render when  email and password are empty', () => {
//   const {getByText, getByTestId} = render(<LoginScreen />);
//   fireEvent.press(getByTestId('loginButton'));
//   getByText('email should not be empty');
//   getByText('password should not be empty');
// });
// it('render  when  email is typed ', () => {
//   const {getByText, getByTestId} = render(<LoginScreen />);
//   fireEvent.changeText(getByTestId('emailInput'), 'leonitabrahaj');
//   fireEvent.press(getByTestId('loginButton'));
//   getByText('password should not be empty');
// });

// it('render  when  password is typed ', () => {
//   const {getByText, getByTestId} = render(<LoginScreen />);
//   fireEvent.changeText(getByTestId('passwordInput'), 'leonitabrahaj');
//   fireEvent.press(getByTestId('loginButton'));
//   getByText('email should not be empty');
// });
