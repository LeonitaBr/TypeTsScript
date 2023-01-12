import React, {memo} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from './style';

interface ButtonProps {
  onPressButton: Function;
  title: string;
  testID?: any;
}

const Button: React.FC<ButtonProps> = ({onPressButton, title, testID}) => {
  return (
    <TouchableOpacity
      testID={testID}
      onPress={() => onPressButton()}
      style={styles.btnContainer}>
      <Text style={styles.btnText}>{title}</Text>
    </TouchableOpacity>
  );
};
export default memo(Button);
