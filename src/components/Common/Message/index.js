import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import colors from '../../../assets/theme/colors';
import styles from './styles';

const Message = ({
  message,
  primary,
  danger,
  info,
  success,
  retry,
  retryFn,
  onDismiss,
}) => {
  const [userDismissed, setDismissed] = useState(false);
  const getBGColor = () => {
    if (primary) {
      return colors.primary;
    }
    if (info) {
      return colors.secondary;
    }
    if (success) {
      return colors.success;
    }
    if (danger) {
      return colors.danger;
    }
  };

  return (
    <>
      {userDismissed ? null : (
        <TouchableOpacity
          disabled
          style={[styles.wrapper, {backgroundColor: getBGColor()}]}>
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                color: colors.white,
              }}>
              {message}
            </Text>
            {retry && !typeof onDismiss === 'function' && (
              <TouchableOpacity onPress={retryFn}>
                <Text
                  style={{
                    color: colors.white,
                  }}>
                  Retry
                </Text>
              </TouchableOpacity>
            )}
            {typeof onDismiss === 'function' && (
              <TouchableOpacity
                onPress={() => {
                  setDismissed(true);
                  onDismiss();
                }}>
                <Text
                  style={{
                    color: colors.white,
                  }}>
                  X
                </Text>
              </TouchableOpacity>
            )}
          </View>
        </TouchableOpacity>
      )}
    </>
  );
};

export default Message;
