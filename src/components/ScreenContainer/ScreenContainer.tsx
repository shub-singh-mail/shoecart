import React from 'react';
import {SafeAreaView} from 'react-native';

import {colors} from '../../constants/theme';

const styles = {backgroundColor: colors.PRIMARY, flex: 1};

const ScreenContainer = ({children}: {children: React.ReactNode}) => {
  return <SafeAreaView style={styles}>{children}</SafeAreaView>;
};

export default ScreenContainer;
