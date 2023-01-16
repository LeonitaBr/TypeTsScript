import React, {memo, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
// import {useDispatch} from 'react-redux';
import Button from '../components/Button/Button';
import Input from '../components/Input/Input';
import Label from '../components/Label/Label';

const LoginScreen = () => {
  // const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const loginButton = () => {
    if (email?.length === 0 && password?.length === 0) {
      // console.log('AAAAA');
      setEmailError('email should not be empty');
      setPasswordError('password should not be empty');
    } else if (email?.length === 0) {
      setEmailError('email should not be empty');
    } else if (password?.length === 0) {
      setPasswordError('password should not be empty');
    }
    // dispatch(loginRequested({email: email, password: password}));
  };

  return (
    <View style={styles.container}>
      <Label labelStyles={styles.labelStyle} title={'Login'} />
      <Input
        testID="emailInput"
        textValue={email}
        onTextChanged={(value: any) => setEmail(value)}
        placeHolder={'Write your username'}
      />
      {emailError.length !== 0 && (
        <Text style={styles.errorMessage}>{emailError}</Text>
      )}
      <Input
        testID="passwordInput"
        textValue={password}
        onTextChanged={(value: any) => setPassword(value)}
        placeHolder={'Password'}
      />
      {passwordError.length !== 0 && (
        <Text style={styles.errorMessage}>{passwordError}</Text>
      )}
      <Button
        testID={'loginButton'}
        onPressButton={loginButton}
        title={'Login'}
      />
    </View>
  );
};
export default memo(LoginScreen);
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
  },
  labelStyle: {
    marginVertical: 20,
  },
  errorMessage: {
    paddingBottom: 15,
    fontSize: 14,
    color: '#C70039',
  },
});
