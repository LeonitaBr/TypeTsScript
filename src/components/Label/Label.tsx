import React, {memo} from 'react';
import {Text, View} from 'react-native';
import styles from './style';
interface ButtonProps {
  title: string;
}
const Label: React.FC<ButtonProps> = ({title}) => {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};
export default memo(Label);
