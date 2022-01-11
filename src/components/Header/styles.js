import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper'

export const Container = styled.View`
  background: #d50000;
  height: 50px;
  padding: 0 16px;
  flex-direction: row;
  align-items: center;
  margin-top: ${getStatusBarHeight()}px;
`;

export const ContainerTitle = styled.View`
  flex: 1;
  padding-right: 16px;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 16px;
  /* font-family: 'Poppins-SemiBold'; */
  color: #fff;
`;
