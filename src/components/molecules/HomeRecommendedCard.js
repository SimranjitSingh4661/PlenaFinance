import React, {Fragment} from 'react';
import {StyleSheet, FlatList} from 'react-native';
import {StyledText} from '../atoms';
import {COLORS, SCREEN_SPACING, FONT_SIZE} from '../../constants';
import {ProductCard} from '../atoms';

const HomeRecommendedCard = ({products}) => {
  const renderItem = ({item}) => <ProductCard item={item} />;
  return (
    <Fragment>
      <StyledText
        textStyle={styles.titile}
        size={FONT_SIZE.H1}
        color={COLORS.BLACK}>
        Recommended
      </StyledText>
      <FlatList
        numColumns={2}
        data={products}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        columnWrapperStyle={styles.columnWrapper}
        contentContainerStyle={styles.listStyles}
      />
    </Fragment>
  );
};

export default HomeRecommendedCard;

const styles = StyleSheet.create({
  titile: {
    paddingHorizontal: SCREEN_SPACING,
  },
  listStyles: {
    marginTop: 20,
    paddingBottom: 150,
    paddingHorizontal: SCREEN_SPACING,
  },
  columnWrapper: {
    justifyContent: 'space-between',
  },
});
