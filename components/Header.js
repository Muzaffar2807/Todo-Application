import { View, Text } from 'react-native';
import React from 'react';

//styled components
import {
  HeaderView,
  HeaderTitle,
  HeaderButton,
  colors
} from "../styles/appStyles";

//icons
import Ionicons from '@expo/vector-icons/Ionicons';

const Header = () => {
  return (
    <HeaderView>
      <HeaderTitle>Todos</HeaderTitle>
      <HeaderButton>
          <Ionicons name="trash" size={25} color={colors.tertiary}/>
      </HeaderButton>
    </HeaderView>
  )
}

export default Header