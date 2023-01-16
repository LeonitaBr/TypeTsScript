import React, {memo} from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  ViewProps,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Colors} from '../../screens/Colors';
type Props = {
  onPress: () => {};
  label: string;
  loading?: boolean;
} & ViewProps;

const WeatherButton = (props: Props) => {
  const {onPress, label, loading, ...otherProps} = props;
  return (
    <TouchableOpacity testID={'weather-button'} onPress={onPress}>
      <LinearGradient
        style={styles.container}
        {...otherProps}
        colors={[Colors.LIGHT_GRAY, Colors.DARK_GRAY]}>
        {loading ? (
          <ActivityIndicator testID="button-loading" />
        ) : (
          <Text style={styles.label} testID="label-id">
            {label}
          </Text>
        )}
      </LinearGradient>
    </TouchableOpacity>
  );
};
export default memo(WeatherButton);
const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    fontSize: 19,
    color: Colors.WHITE,
  },
});
