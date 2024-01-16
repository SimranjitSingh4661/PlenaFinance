import React, {useState, useEffect} from 'react';
import {View, ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {ScreenContainer, StyledText} from '../../components/atoms';
import {Header, Button, PriceTag, Loading} from '../../components/atoms';
import {CarouselCard} from '../../components/molecules';
import {COLORS, FONT_SIZE, NAVIGATION, STRINGS} from '../../constants';
import {Rating} from 'react-native-ratings';
import {generateRandomReviews} from '../../utils';
import {useRoute} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import Toast from 'react-native-toast-message';
import {addToCart} from '../../redux/actions/actions';
import styles from './styles';

const ProductDetailScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});
  const storeProducts = useSelector(state => state.appData?.products);
  const favourite = useSelector(state => state.appData?.favourite);
  const {productId} = route.params;

  useEffect(() => {
    const foundInFavourite = favourite.filter(item => item.id === productId);
    if (foundInFavourite?.[0]?.id) {
      setData(...foundInFavourite);
    } else {
      const product = storeProducts.filter(item => item.id === productId);
      setData(...product);
    }
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [storeProducts, favourite]);

  const onCartPress = () => {
    navigation.navigate('Screen', {screen: NAVIGATION.SCREENS.CART_SCREEN});
  };

  const onAddCartPress = () => {
    Toast.show({
      type: 'success',
      text1: `${data?.title} ${STRINGS.SUCCESSFULLY_ADDED_TO_CART}`,
    });
    dispatch(addToCart(data));
  };

  const onBuyNowPress = () => {
    navigation.navigate('Screen', {screen: NAVIGATION.SCREENS.CART_SCREEN});
    dispatch(addToCart(data));
  };

  if (loading) {
    return (
      <ScreenContainer>
        <Header showCart onCartPress={onCartPress} />
        <Loading />
      </ScreenContainer>
    );
  }

  return (
    <ScreenContainer>
      <Header showCart onCartPress={onCartPress} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 100,
        }}>
        <View style={styles.titleContainer}>
          <StyledText
            textStyle={styles.brandText}
            color={COLORS.BLACK}
            size={FONT_SIZE.H1}>
            {data?.brand}
          </StyledText>
          <StyledText
            textStyle={styles.titleText}
            color={COLORS.BLACK}
            size={FONT_SIZE.H1}>
            {data?.title}
          </StyledText>
        </View>
        <View style={styles.ratingView}>
          <Rating
            type="custom"
            imageSize={20}
            readonly={true}
            style={styles.rating}
            startingValue={data?.rating || 0}
            ratingBackgroundColor={COLORS.BLACK}
          />
          <StyledText
            size={FONT_SIZE.BODY_1}
            textStyle={styles.ratingText}
            color={COLORS.TEXT_GREY}>{`${generateRandomReviews()} ${
            STRINGS.REVIEWS
          }`}</StyledText>
        </View>
        <CarouselCard data={data?.images} item={data} />
        <View style={styles.screenSpacing}>
          <View style={styles.paddingVertical20}>
            <PriceTag />
          </View>
          <View style={styles.rowSpaceBetween}>
            <Button
              onPress={onAddCartPress}
              title={STRINGS.ADD_TO_CART}
              containerStyles={styles.width48}
            />
            <Button
              bgBlue
              onPress={onBuyNowPress}
              title={STRINGS.BUY_NOW}
              containerStyles={styles.width48}
            />
          </View>
          <StyledText size={FONT_SIZE.H4} color={COLORS.BLACK}>
            {STRINGS.DETAILS}
          </StyledText>
          <StyledText size={FONT_SIZE.BODY_1} color={COLORS.TEXT_GREY}>
            {data?.description || ''}
          </StyledText>
        </View>
      </ScrollView>
    </ScreenContainer>
  );
};

export default ProductDetailScreen;
