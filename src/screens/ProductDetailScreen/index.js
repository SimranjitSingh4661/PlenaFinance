import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {ScreenContainer, StyledText} from '../../components/atoms';

const ProductDetailScreen = () => {
  return (
    <ScreenContainer>
      <View>
        <StyledText variant="manropeBold" size={30} color="red">
          {'Product Detail Screen'}
        </StyledText>

      </View>
    </ScreenContainer>
  );
};


export default ProductDetailScreen;
