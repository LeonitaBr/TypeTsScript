import React, {memo} from 'react';
import {TextInput} from 'react-native';
import styles from './style';

interface InputProps {
  textValue: string;
  onTextChanged: Function;
  placeHolder: string;
  testID?: string;
}
const InputComponent: React.FC<InputProps> = ({
  textValue,
  onTextChanged,
  placeHolder,
  testID,
}) => {
  // const [text, onChangeValue] = React.useState('Useless Text');
  return (
    <TextInput
      testID={testID}
      style={styles.input}
      onChangeText={() => onTextChanged()}
      value={textValue}
      placeholder={placeHolder}
      keyboardType="numeric"
    />
  );
};
export default memo(InputComponent);
