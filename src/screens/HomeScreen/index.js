import React, {useState, useEffect} from 'react';
import {View, ScrollView, Keyboard} from 'react-native';
import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {ScreenContainer, HomeHeader} from '../../components/atoms';
import {
  HomeSectionHeader,
  HomeBanners,
  HomeRecommendedCard,
} from '../../components/molecules';
import {SharedStyles} from '../../shared';
import {Loading} from '../../components/atoms';
import Toast from 'react-native-toast-message';
import {NAVIGATION} from '../../constants';
import {setProductsInStore} from '../../redux/actions/actions';
import {getAllProductsApi} from '../../api/products';
import {useSelector} from 'react-redux';

const HomeScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [value, setValue] = useState('');
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  const storeProducts = useSelector(state => state.appData?.products);

  useEffect(() => {
    getAllProductsApi()
      .then(res => {
        setProducts(res?.products);
        dispatch(setProductsInStore(res?.products));
      })
      .catch(err => {
        Toast.show({
          type: 'error',
          text1: err?.errorMessage,
        });
      })
      .finally(() => setLoading(false));
  }, [false]);

  const onCartPress = () => {
    navigation.navigate('Screen', {screen: NAVIGATION.SCREENS.CART_SCREEN});
  };

  const onTextChange = async value => {
    setValue(value);
    if (value == '') {
      Keyboard.dismiss();
      setProducts(storeProducts);
    }
    setProducts(prev =>
      prev.filter(item =>
        item.title.toLowerCase().startsWith(value.toLowerCase()),
      ),
    );
  };

  return (
    <ScreenContainer>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <HomeHeader name={'Hey, Rahul'} onCartPress={onCartPress} />
          <HomeSectionHeader value={value} onChangeText={onTextChange} />
          <HomeBanners />
        </View>
        {loading ? (
          <Loading />
        ) : (
          <View style={SharedStyles.fullFlex}>
            <HomeRecommendedCard products={products} />
          </View>
        )}
      </ScrollView>
    </ScreenContainer>
  );
};

export default HomeScreen;
