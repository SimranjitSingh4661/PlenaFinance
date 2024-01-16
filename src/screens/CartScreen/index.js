import React, {useEffect} from 'react';
import {View, ScrollView} from 'react-native';
import {
  Header,
  Button,
  StyledText,
  ScreenContainer,
  EmptyComponent,
} from '../../components/atoms';
import {COLORS, FONT_SIZE, STRINGS, DELIVERY_FEE} from '../../constants';
import styles from './styles';
import {CartItem} from '../../components/molecules';
import {useSelector, useDispatch} from 'react-redux';
import {calculateCostOfCart, checkOutCart} from '../../redux/actions/actions';
import Toast from 'react-native-toast-message';

const CartScreen = () => {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.appData?.cart);
  const subTotal = useSelector(state => state.appData?.totalCost);

  useEffect(() => {
    dispatch(calculateCostOfCart());
  }, [subTotal]);

  const onCheckOutPress = () => {
    Toast.show({
      type: 'success',
      text1: STRINGS.THANK_YOU_FOR_YOUR_PURCHASE,
    });
    dispatch(checkOutCart());
  };

  if (cart?.length === 0) {
    return (
      <ScreenContainer>
        <Header title={`${STRINGS.SHOPPING_CART}`} />
        <EmptyComponent />
      </ScreenContainer>
    );
  }

  return (
    <ScreenContainer>
      <Header title={`${STRINGS.SHOPPING_CART} (${cart?.length})`} />
      <StyledText textAlign="center" color={COLORS.LIKE} size={FONT_SIZE.B1}>
        {STRINGS.SWIPE_LEFT_TO_DELETE_ITEM}
      </StyledText>
      <ScrollView showsVerticalScrollIndicator={false}>
        <CartItem listData={cart} />
      </ScrollView>
      <View style={styles.screenSpacing}>
        {[
          {
            title: STRINGS.SUBTOTAL,
            amount: subTotal,
          },
          {
            title: STRINGS.DELIVERY,
            amount: DELIVERY_FEE,
          },
          {
            title: STRINGS.TOTAL,
            amount: DELIVERY_FEE + subTotal,
          },
        ].map((item, index) => (
          <View style={styles.priceContainer}>
            <StyledText color={COLORS.TEXT_GREY} size={FONT_SIZE.H4}>
              {item.title}
            </StyledText>
            <StyledText
              color={COLORS.BLACK}
              size={FONT_SIZE.H4}>{`$${item.amount}`}</StyledText>
          </View>
        ))}
        <Button
          bgBlue
          onPress={onCheckOutPress}
          containerStyles={styles.btn}
          title={STRINGS.PROCEED_TO_CHECKOUT}
        />
      </View>
    </ScreenContainer>
  );
};

export default CartScreen;
