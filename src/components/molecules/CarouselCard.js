import React, {Fragment, useState} from 'react';
import {StyleSheet, View, TouchableOpacity, Image} from 'react-native';
import {Heart} from 'lucide-react-native';
import {SwiperFlatList} from 'react-native-swiper-flatlist';
import {COLORS, SCREEN} from '../../constants';
import {SharedStyles} from '../../shared';
import {useDispatch} from 'react-redux';
import {addToFavourite, removeFromFavourite} from '../../redux/actions/actions';

const {BLACK, WHITE, LIKE, YELLOW_DARK, TEXT_GREY} = COLORS;
const {HEIGHT, WIDTH} = SCREEN;

const CarouselCard = ({data, item}) => {
  const dispatch = useDispatch();
  const [like, setLike] = useState(item?.like ?? false);

  const onLikePress = () => {
    if (!like) {
      dispatch(addToFavourite(item));
    } else {
      dispatch(removeFromFavourite(item));
    }
    setLike(!like);
  };
  
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={onLikePress}
        style={styles.likeBtn}
        hitSlop={SharedStyles.hitSlop}>
        <Heart
          size={30}
          color={like ? LIKE : BLACK}
          fill={like ? LIKE : WHITE}
        />
      </TouchableOpacity>
      <SwiperFlatList
        index={0}
        autoplay
        data={data}
        autoplayLoop
        showPagination
        autoplayDelay={4}
        paginationDefaultColor={TEXT_GREY}
        paginationActiveColor={YELLOW_DARK}
        paginationStyle={styles.paginationStyle}
        paginationStyleItem={styles.paginationStyleItem}
        renderItem={({item}) => <ImageComp img={item} />}
      />
    </View>
  );
};

const ImageComp = ({img}) => {
  return (
    <Fragment>
      <Image
        style={styles.image}
        source={{
          uri: img,
        }}
      />
    </Fragment>
  );
};

export default CarouselCard;

const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  likeBtn: {
    top: 25,
    right: 25,
    zIndex: 10,
    position: 'absolute',
  },
  image: {
    height: HEIGHT / 3,
    width: WIDTH,
    resizeMode: 'stretch',
  },
  paginationStyle: {
    left: 10,
    bottom: 0,
    position: 'absolute',
  },
  paginationStyleItem: {
    width: 20,
    height: 5,
    marginRight: 0,
  },
});
