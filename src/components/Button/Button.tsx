import React, {memo} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from './style';

interface ButtonProps {
  onPressButton: Function;
  title: string;
}

const Button: React.FC<ButtonProps> = ({onPressButton, title}) => {
  return (
    <TouchableOpacity
      onPress={() => onPressButton()}
      style={styles.btnContainer}>
      <Text style={styles.btnText}>{title}</Text>
    </TouchableOpacity>
  );
};
export default memo(Button);
