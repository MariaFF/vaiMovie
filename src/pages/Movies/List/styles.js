import { Pressable } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;


export const ContainerListItem = styled(Pressable)`
  flex-direction: row;
  border-radius: 20px;
  background: #fff;
  margin: 0 16px 16px 16px;
  elevation: 4;
`;

export const MovieImage = styled.Image`
  height: 120px;
  width: 100px;
  background: #ccc;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
`;

export const ContentListItem = styled.View`
  flex: 1;
  padding: 8px;
  justify-content: space-between;
`;

export const MovieName = styled.Text`
  /* font-family: 'Poppins-SemiBold'; */
  font-size: 16px;
`;

export const Favorite = styled(Pressable)`
  flex-direction: row;
  /* align-items: center; */
  justify-content: flex-end;
`;

export const FavoriteText = styled.Text`
  font-size: 14px;
  color: #424242;
  /* font-family: 'Poppins-Regular'; */
  margin-left: 4px;
`;

export const InfoText = styled.Text`
  font-size: 14px;
  color: #424242;
  /* font-family: 'Poppins-Regular'; */
  margin-left: 4px;
`;

export const SearchContainer = styled.View`
  background: #d50000;
  margin-bottom: 16px;
  padding: 8px 16px;
`;

export const InputContainer = styled.View`
  background: #fff;
  border-radius: 10px;
  height: 42px;
  width: 100%;
  flex-direction: row;
  align-items: center;
  padding: 0 16px;
`;

export const TextInput = styled.TextInput`
  flex: 1;
  color: #212121;
  /* font-family: 'Poppins-SemiBold'; */
  font-size: 16px;
  padding: 0;
`;
