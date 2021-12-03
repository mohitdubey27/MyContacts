import React from 'react';
import {View, ActivityIndicator} from 'react-native';
import styles from './styles';
import colors from '../../../assets/theme/colors';

const Loader = () => {
  return (
    <View style={styles.loaderView}>
      <ActivityIndicator
        size="large"
        style={styles.loader}
        color={colors.primary}
      />
    </View>
  );
};

export default Loader;
