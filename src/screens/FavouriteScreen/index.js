import React from 'react';
import {View, FlatList} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {ScreenContainer, HomeHeader} from '../../components/atoms';
import {useSelector} from 'react-redux';
import {NAVIGATION, STRINGS} from '../../constants';
import {ProductCard, EmptyComponent} from '../../components/atoms';
import styles from './styles';

const FavouriteScreen = () => {
  const navigation = useNavigation();
  const favourite = useSelector(state => state.appData?.favourite);
  const renderItem = ({item}) => <ProductCard item={item} />;
  const onCartPress = () => {
    navigation.navigate('Screen', {screen: NAVIGATION.SCREENS.CART_SCREEN});
  };
  return (
    <ScreenContainer>
      <HomeHeader name={STRINGS.FAVOURITE} onCartPress={onCartPress} />
      <FlatList
        numColumns={2}
        data={favourite}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={<EmptyComponent />}
        columnWrapperStyle={styles.columnWrapper}
        contentContainerStyle={styles.listStyles}
      />
    </ScreenContainer>
  );
};

export default FavouriteScreen;
