import React, {memo} from 'react';
import {TextInput} from 'react-native';
import styles from './style';

const InputComponent = () => {
  const [text, onChangeValue] = React.useState('Useless Text');
  return (
    <TextInput
      style={styles.input}
      onChangeText={value => onChangeValue(value)}
      value={text}
      placeholder="useless placeholder"
      keyboardType="numeric"
    />
  );
};
export default memo(InputComponent);
