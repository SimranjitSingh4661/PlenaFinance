import React, {useState} from 'react';
import {FlatList, Keyboard} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {ScreenContainer, HomeHeader} from '../../components/atoms';
import {HomeSectionHeader} from '../../components/molecules';
import {useSelector} from 'react-redux';
import {NAVIGATION, STRINGS} from '../../constants';
import {ProductCard} from '../../components/atoms';
import styles from './styles';

const CategoriesScreen = () => {
  const navigation = useNavigation();
  const [value, setValue] = useState('');
  const products = useSelector(state => state.appData?.products);
  const [data, setData] = useState(products);

  const renderItem = ({item}) => <ProductCard item={item} />;

  const onCartPress = () => {
    navigation.navigate('Screen', {screen: NAVIGATION.SCREENS.CART_SCREEN});
  };

  const onTextChange = async value => {
    setValue(value);
    if (value == '') {
      Keyboard.dismiss();
      setData(products);
    }
    setData(prev =>
      prev.filter(item =>
        item.title.toLowerCase().startsWith(value.toLowerCase()),
      ),
    );
  };
  return (
    <ScreenContainer>
      <HomeHeader name={STRINGS.FAVOURITE} onCartPress={onCartPress} />
      <HomeSectionHeader hideBottom value={value} onChangeText={onTextChange} />
      <FlatList
        data={data}
        numColumns={2}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        columnWrapperStyle={styles.columnWrapper}
        contentContainerStyle={styles.listStyles}
      />
    </ScreenContainer>
  );
};

export default CategoriesScreen;
