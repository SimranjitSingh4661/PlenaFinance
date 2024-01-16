import React, {useState} from 'react';
import {View, StyleSheet, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {COLORS, NAVIGATION, FONT_SIZE, SCREEN} from '../../constants';
import {StyledText} from '../../components/atoms';
import {
  HomeTabIcon,
  CategoryTabIcon,
  HeartTabIcon,
  MoreTabIcon,
} from '../../assets/SVGs';
import {SharedStyles} from '../../shared';

const TABS = [
  {
    id: 'home',
    name: 'home',
    screen: NAVIGATION.SCREENS.HOME_SCREEN,
    icon: ({W, H, active}) => <HomeTabIcon active={active} W={W} H={H} />,
  },
  {
    id: 'categories',
    name: 'Categories',
    screen: NAVIGATION.SCREENS.CATEGORIES_SCREEN,
    icon: ({W, H, active}) => <CategoryTabIcon active={active} W={W} H={H} />,
  },
  {
    id: 'favourite',
    name: 'Favourite',
    screen: NAVIGATION.SCREENS.FAVOURITE_SCREEN,
    icon: ({W, H, active}) => <HeartTabIcon active={active} W={W} H={H} />,
  },
  {
    id: 'more',
    name: 'More',
    screen: 'More',
    icon: ({W, H, active}) => <MoreTabIcon active={active} W={W} H={H} />,
  },
];

const CustomTabBar = ({state, descriptors, navigation}) => {
  const [activeTab, setActiveTab] = useState(NAVIGATION.SCREENS.HOME_SCREEN);
  const {navigate} = useNavigation();

  const onTabChange = tab => {
    if (tab === 'More') return;
    setActiveTab(tab);
    navigate(tab);
  };

  return (
    <View style={styles.tabContainer}>
      <View style={styles.tabInnerContainer}>
        {TABS.map((tab, index) => {
          const Icon = tab.icon;
          return (
            <Pressable
              style={styles.tabBox}
              key={`${tab.id}_${index}`}
              onPress={() => onTabChange(tab.screen)}>
              <View style={tab.screen === activeTab ? styles.activeTab : {}}>
                <Icon
                  active={tab.screen === activeTab}
                  W={tab.screen === activeTab ? FONT_SIZE.H1 : FONT_SIZE.H2}
                  H={tab.screen === activeTab ? FONT_SIZE.H1 : FONT_SIZE.H2}
                />
              </View>
              <StyledText
                size={FONT_SIZE.B1}
                textStyle={styles.tabText}
                variant="manropeRegular"
                color={
                  tab.screen === activeTab ? 'transparent' : COLORS.TEXT_GREY
                }>
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
    bottom: 0,
    paddingTop: 15,
    paddingBottom: 10,
    width: SCREEN.WIDTH,
    position: 'absolute',
    ...SharedStyles.shadow,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    height: SCREEN.HEIGHT / 12,
    backgroundColor: COLORS.WHITE,
  },
  tabInnerContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
  },
  tabBox: {
    flex: 1,
    alignItems: 'center',
    position: 'relative',
  },
  activeTab: {
    top: -32,
    padding: 18,
    borderRadius: 50,
    position: 'absolute',
    backgroundColor: COLORS.BLACK,
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabText: {
    paddingTop: 3,
  },
});

export default CustomTabBar;
