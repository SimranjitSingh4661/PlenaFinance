import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {
  COLORS,
  SCREEN_SPACING,
  STRINGS,
  FONT_SIZE,
  SCREEN,
} from '../../constants';
import {StyledText, Input} from '../atoms';
import {Search} from 'lucide-react-native';
import {Dropdown} from 'react-native-element-dropdown';
import {DummyData} from '../../utils';

const {PRIMARY, WHITE, TEXT_GREY, BLACK} = COLORS;
const {DELIVER, TIME} = DummyData;
const {WIDTH} = SCREEN;

const HomeSectionHeader = ({hideBottom = false, value, onChangeText}) => {
  const [deliver, setDeliver] = useState('');
  const [time, setTime] = useState('');

  return (
    <View style={[styles.container, hideBottom && styles.withHide]}>
      <Input
        value={value}
        onChangeText={onChangeText}
        leftIcon={<Search color={WHITE} />}
        placeholder={STRINGS.SEARCH_PRODUCTS_OR_STORE}
      />
      {!hideBottom && (
        <View style={styles.textBox}>
          <View>
            <StyledText size={FONT_SIZE.BODY_2} color={TEXT_GREY}>
              {STRINGS.DELIVERY_TO}
            </StyledText>
            <Dropdown
              data={DELIVER}
              value={deliver}
              maxHeight={300}
              labelField="label"
              valueField="value"
              style={styles.dropdown}
              placeholder="Green Way 3000, Sylhet"
              itemTextStyle={styles.dropDownTextStyle}
              onChange={item => setDeliver(item.value)}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
            />
          </View>
          <View>
            <StyledText size={FONT_SIZE.BODY_2} color={TEXT_GREY}>
              {STRINGS.WITHIN}
            </StyledText>
            <Dropdown
              data={TIME}
              value={time}
              maxHeight={300}
              labelField="label"
              valueField="value"
              style={styles.timeDropDown}
              placeholder="1 Hour"
              itemTextStyle={styles.dropDownTextStyle}
              onChange={item => setTime(item.value)}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
            />
          </View>
        </View>
      )}
    </View>
  );
};

export default HomeSectionHeader;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: SCREEN_SPACING,
    backgroundColor: PRIMARY,
  },
  textBox: {
    paddingTop: 29,
    paddingBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  withHide: {
    paddingBottom: 20,
  },
  dropdown: {
    width: WIDTH / 1.8,
  },
  placeholderStyle: {
    fontSize: FONT_SIZE.BODY_1,
  },
  selectedTextStyle: {
    fontSize: FONT_SIZE.BODY_1,
  },
  dropDownTextStyle: {
    color: BLACK,
    fontSize: FONT_SIZE.BODY_1,
  },
  timeDropDown: {
    width: WIDTH / 4,
  },
});
