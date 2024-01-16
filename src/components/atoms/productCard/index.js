import React, {useState} from 'react';
import {Image, View, TouchableOpacity, Pressable} from 'react-native';
import StyledText from '../styledText';
import {FONT_SIZE, COLORS, NAVIGATION, STRINGS} from '../../../constants';
import {Heart, Plus} from 'lucide-react-native';
import {SharedStyles} from '../../../shared';
import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {
  addToCart,
  addToFavourite,
  removeFromFavourite,
} from '../../../redux/actions/actions';
import Toast from 'react-native-toast-message';
import styles from './styles';

const {BLACK, WHITE, LIKE} = COLORS;

const ProductCard = ({item}) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [like, setLike] = useState(item?.like ?? false);

  const onLikePress = () => {
    if (!like) {
      dispatch(addToFavourite(item));
    } else {
      dispatch(removeFromFavourite(item));
    }
    setLike(!like);
  };

  const onAddCartPress = () => {
    Toast.show({
      type: 'success',
      text1: `${item?.title} ${STRINGS.SUCCESSFULLY_ADDED_TO_CART}`,
    });
    dispatch(addToCart(item));
  };

  const onProductPress = () => {
    navigation.navigate('Screen', {
      screen: NAVIGATION.SCREENS.PRODUCTDETAIL_SCREEN,
      params: {productId: item.id},
    });
  };

  return (
    <Pressable onPress={onProductPress} style={styles.container}>
      <TouchableOpacity
        onPress={onLikePress}
        style={styles.likeBtn}
        hitSlop={SharedStyles.hitSlop}>
        <Heart color={like ? LIKE : BLACK} fill={like ? LIKE : WHITE} />
      </TouchableOpacity>
      <Image
        style={styles.image}
        source={{
          uri: item?.thumbnail || '',
        }}
      />

      <View style={styles.priceView}>
        <View style={SharedStyles.fullFlex}>
          <StyledText
            variant="manropeRegular"
            color={BLACK}
            size={FONT_SIZE.B1}>{`$${item?.price || ''}`}</StyledText>
          <StyledText
            variant="manropeRegular"
            numberOfLines={1}
            ellipsizeMode="tail"
            color="#616A7D"
            size={FONT_SIZE.B2}>
            {item?.title || ''}
          </StyledText>
        </View>
        <TouchableOpacity
          hitSlop={SharedStyles.hitSlop}
          onPress={onAddCartPress}
          style={styles.addBtn}>
          <Plus size={FONT_SIZE.BODY_1} color={WHITE} />
        </TouchableOpacity>
      </View>
    </Pressable>
  );
};

export default ProductCard;
