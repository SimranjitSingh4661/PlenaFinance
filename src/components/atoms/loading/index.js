import React, {Fragment} from 'react';
import {StyleSheet, ActivityIndicator} from 'react-native';
import {COLORS} from '../../../constants';

const Loading = () => {
  return (
    <Fragment>
      <ActivityIndicator color={COLORS.PRIMARY} size={'large'} />
    </Fragment>
  );
};

export default Loading;

const styles = StyleSheet.create({});
