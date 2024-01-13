import React, {useState} from 'react';
import {View, StyleSheet, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {COLORS} from '../../constants';
import {StyledText} from '../../components/atoms';
import {
  HomeTabIcon,
  CategoryTabIcon,
  HeartTabIcon,
  MoreTabIcon,
} from '../../assets/SVGs';

const {WHITE, TEXT_GREY} = COLORS;

const TABS = [
  {
    id: 'home',
    name: 'home',
    screen: 'home',
    icon: <HomeTabIcon />,
  },
  {
    id: 'categories',
    name: 'Categories',
    screen: 'Categories',
    icon: <CategoryTabIcon />,
  },
  {
    id: 'favourite',
    name: 'Favourite',
    screen: 'Favourite',
    icon: <HeartTabIcon />,
  },
  {
    id: 'more',
    name: 'More',
    screen: 'More',
    icon: <MoreTabIcon />,
  },
];

const CustomTabBar = ({state, descriptors, navigation}) => {
  const [activeTab, setActiveTab] = useState('HOME');
  const {navigate} = useNavigation();

  const onTabChange = tab => {
    console.log('tab', tab)
    setActiveTab(tab);
  };

  return (
    <View style={styles.tabContainer}>
      <View style={styles.tabInnerContainer}>
        {TABS.map((tab, index) => {
          return (
            <Pressable
              style={styles.tabBox}
              key={`${tab.id}_${index}`}
              onPress={() => onTabChange(tab.screen)}>
              {tab.icon}
              <StyledText
                color={'black'}
                //  color={tab.screen === activeTab ? WHITE : TEXT_GREY}
              >
                {tab.name}
              </StyledText>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  tabContainer: {
    // paddingBottom: 10,
    // position: 'relative',
    // backgroundColor: COLORS.PRIMARY,
  },
  tabInnerContainer: {
    width: '100%',
    flexDirection: 'row',
    position: 'relative',
    paddingHorizontal: 40,
  },
  tabBox: {
    flex: 1,
    alignItems: 'center',
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default CustomTabBar;
