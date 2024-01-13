import React, {useState, forwardRef, Fragment} from 'react';
import {TextInput, View} from 'react-native';
import {COLORS} from '../../../constants';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';

const {PRIMARY} = COLORS;

export default forwardRef(
  (
    {
      error,
      onPress = null,
      leftIcon = null,
      rightIcon = null,
      editable = true,
      isCount = false,
      isValid = false,
      totalDigits = null,
      isCounterWhite = false,
      containerStyle = {},
      ...props
    },
    ref,
  ) => {
    const [isFocused, setIsFocused] = useState(false);

    let borderColor = onPress ? COLORS.white : '#CCCCCC';
    const backgroundColor = COLORS.PRIMARY;

    if (isFocused) borderColor = COLORS.blue;
    if (error) borderColor = COLORS.red;
    if (isValid) borderColor = COLORS.golden;

    return (
      <Fragment>
        <LinearGradient
          end={{x: 1, y: 0}}
          start={{x: 0, y: 1}}
          style={[
            {
              padding: 2,
            },
            containerStyle,
          ]}
          colors={['rgba(255, 255, 255, 0.2)', PRIMARY]}>
          <View style={[styles.container, {backgroundColor, borderColor}]}>
            {leftIcon}
            <TextInput
              ref={ref}
              editable={editable}
              {...props}
              placeholderTextColor={COLORS.textGray}
              style={[
                styles.textInput,
                {marginLeft: leftIcon ? 6 : 0},
                props?.style,
              ]}
              onFocus={() => {
                setIsFocused(true);
                props?.onFocus?.();
              }}
              onBlur={e => {
                setIsFocused(false);
                props?.onBlur?.(e);
              }}
            />
            {rightIcon}
          </View>
        </LinearGradient>
      </Fragment>
    );
  },
);
