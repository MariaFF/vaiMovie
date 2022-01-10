import { Pressable } from 'react-native';
import styled from 'styled-components/native';

export const ImageBackground = styled.ImageBackground`
  flex: 1;
  width: 100%;
  height: 100%;
`;

export const Content = styled.View`
  flex: 1;
  padding: 16px;
  align-items: center;
  justify-content: flex-end;
`;

export const ChipName = styled.View`
  background: #fff;
  padding: 8px;
  border-radius: 20px;
`;

export const ChipNameText = styled.Text`
  /* font-family: 'Poppins-SemiBold'; */
  font-size: 16px;
  color: #212121;
`;

export const ContentInfo = styled.View`
  flex-direction: row;
  width: 60%;
  justify-content: space-between;
  margin-top: 16px;
`;

export const ChipInfo = styled(Pressable)`
  background: #fff;
  width: 80px;
  padding: 16px 4px;
  border-radius: 4px;
  align-items: center;
`;

export const ChipInfoText = styled.Text`
  /* font-family: 'Poppins-Regular'; */
  font-size: 14px;
  color:#D50000;
  margin-top: 8px;
`;
