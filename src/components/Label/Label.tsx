import React, {memo} from 'react';
import {Text, View} from 'react-native';
import styles from './style';
interface ButtonProps {
  title: string;
  labelStyles?: object;
}

const Label: React.FC<ButtonProps> = ({title, labelStyles}) => {
  return (
    <View>
      <Text style={{...styles.title, ...labelStyles}}>{title}</Text>
    </View>
  );
};
export default memo(Label);
