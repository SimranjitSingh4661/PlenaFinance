import React from 'react';
import {StyleSheet, View, ScrollView, Image} from 'react-native';
import {DummyData} from '../../utils';
import {SCREEN, SCREEN_SPACING} from '../../constants';
import {SharedStyles} from '../../shared';

const {WIDTH} = SCREEN;

const HomeBanners = () => {
  return (
    <ScrollView
      horizontal
      pagingEnabled
      disableIntervalMomentum
      snapToInterval={WIDTH / 1.3}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.container}>
      {DummyData.HOME_BANNERS?.map?.((item, index) => {
        return (
          <View>
            <Image style={styles.tinyLogo} source={item.image} />
          </View>
        );
      })}
    </ScrollView>
  );
};

export default HomeBanners;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginBottom: 20,
    paddingLeft: SCREEN_SPACING,
  },
  tinyLogo: {
    height: 160,
    marginRight: 10,
    width: WIDTH / 1.3,
    resizeMode: 'center',
    ...SharedStyles.shadow,
  },
});
