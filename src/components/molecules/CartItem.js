import React, {useState} from 'react';
import {
  FlatList,
  TouchableOpacity,
  View,
  StyleSheet,
  Image,
  LayoutAnimation,
  UIManager,
} from 'react-native';
import {StyledText} from '../atoms';
import {SharedStyles} from '../../shared';
import {COLORS, SCREEN_SPACING, STRINGS, FONT_SIZE} from '../../constants';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import {Minus, Plus, Trash2} from 'lucide-react-native';
import {useDispatch} from 'react-redux';
import {
  removeFromCart,
  addToCart,
  removeCartItem,
} from '../../redux/actions/actions';

const {WHITE, BLACK} = COLORS;
const BUTTON_SIZE = 25;

// Enable LayoutAnimation on Android
if (Platform.OS === 'android') {
  UIManager.setLayoutAnimationEnabledExperimental &&
    UIManager.setLayoutAnimationEnabledExperimental(true);
}

const Buttons = ({count, item}) => {
  const [itemCount, setCount] = useState(count);
  const dispatch = useDispatch();

  const onAddPress = () => {
    setCount(count + 1);
    dispatch(addToCart(item));
  };

  const onMinusPress = () => {
    setCount(count - 1);
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    dispatch(removeCartItem(item));
  };

  return (
    <View style={SharedStyles.rowCenter}>
      <TouchableOpacity
        style={styles.btns}
        onPress={onMinusPress}
        hitSlop={SharedStyles.hitSlop}>
        <Minus size={FONT_SIZE.H4} color={BLACK} />
      </TouchableOpacity>
      <StyledText
        textStyle={{
          marginHorizontal: 20,
        }}
        size={FONT_SIZE.BODY_1}>
        {itemCount}
      </StyledText>
      <TouchableOpacity
        style={styles.btns}
        onPress={onAddPress}
        hitSlop={SharedStyles.hitSlop}>
        <Plus size={FONT_SIZE.H4} color={BLACK} />
      </TouchableOpacity>
    </View>
  );
};

export default function CartItem({listData}) {
  const dispatch = useDispatch();
  let row = [];
  let prevOpenedRow;

  const renderItem = ({item, index}, onClick) => {
    const closeRow = index => {
      if (prevOpenedRow && prevOpenedRow !== row[index]) {
        prevOpenedRow.close();
      }
      prevOpenedRow = row[index];
    };

    const renderRightActions = (progress, dragX, onClick) => {
      return (
        <TouchableOpacity onPress={onClick} style={styles.deleteView}>
          <View style={styles.deleteInnerView}>
            <Trash2 color={COLORS.red} />
          </View>
        </TouchableOpacity>
      );
    };

    return (
      <Swipeable
        renderRightActions={(progress, dragX) =>
          renderRightActions(progress, dragX, onClick)
        }
        onSwipeableOpen={() => closeRow(index)}
        ref={ref => (row[index] = ref)}
        rightOpenValue={-100}>
        <View style={styles.rowContainer}>
          <Image
            style={styles.image}
            source={{
              uri: item?.thumbnail || '',
            }}
          />
          <View style={SharedStyles.fullFlex}>
            <StyledText size={FONT_SIZE.BODY_1}>
              {'$' + item?.price || ''}
            </StyledText>
            <StyledText size={FONT_SIZE.BODY_1}>{item?.title || ''}</StyledText>
          </View>

          <Buttons count={item?.count || 0} item={item} />
        </View>
      </Swipeable>
    );
  };

  const deleteItem = ({item, index}) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    dispatch(removeFromCart(item));
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={listData}
        renderItem={v =>
          renderItem(v, () => {
            deleteItem(v);
          })
        }
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  rowContainer: {
    paddingVertical: 15,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: WHITE,
    paddingHorizontal: SCREEN_SPACING,
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 25,
    borderRadius: 10,
  },
  btns: {
    borderRadius: 50,
    height: BUTTON_SIZE,
    width: BUTTON_SIZE,
    alignItems: 'center',
    ...SharedStyles.shadow,
    backgroundColor: WHITE,
    justifyContent: 'center',
  },
  deleteView: {
    width: 70,
    backgroundColor: COLORS.LIKE,
  },
  deleteInnerView: {
    flex: 1,
    marginLeft: 20,
    justifyContent: 'center',
  },
});
