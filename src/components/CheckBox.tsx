import * as React from 'react';
import Icons from 'react-native-vector-icons/FontAwesome';
import { isTablet } from '../modules/layout';
import { getTheme } from '../modules/theme';

import {
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  ViewStyle
} from 'react-native';

interface Props {
  label?: string;
  value: boolean;
  onChange?: (value: boolean) => void;
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
}

class CheckBox extends React.Component<Props> {
  getStyles = () => {
    const theme = getTheme();
    const { disabled } = this.props;

    return StyleSheet.create({
      container: {
        flexDirection: 'row',
        alignItems: 'center'
      },
      icon: {
        color: disabled ? theme.disabledColor : theme.textColor1,
        fontSize: 24,
        height: 24,
        width: 24
      },
      label: {
        color: disabled ? theme.disabledColor : theme.textColor1,
        fontFamily: 'Lato-Regular',
        fontSize: isTablet() ? 15 : 12
      }
    });
  };

  render() {
    const { label, value, onChange, disabled, style } = this.props;

    const styles = this.getStyles();

    return (
      <TouchableOpacity
        style={[styles.container, style]}
        disabled={disabled}
        onPress={() => {
          if (onChange) {
            onChange(!value);
          }
        }}
      >
        <Icons
          name={value ? 'check-square-o' : 'square-o'}
          style={styles.icon}
        />
        <Text style={styles.label}>{label}</Text>
      </TouchableOpacity>
    );
  }
}

export default CheckBox;