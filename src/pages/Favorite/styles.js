import styled from 'styled-components/native';

export const ContainerListItem = styled.View`
  flex-direction: row;
  border-radius: 20px;
  background: #fff;
  margin: 0 16px 16px 16px;
  elevation: 4;
`;

export const ContentListItem = styled.View`
  flex: 1;
  padding: 8px;
  justify-content: space-between;
`;

export const MovieName = styled.Text`
  font-size: 16px;
`;

export const InfoText = styled.Text`
  font-size: 14px;
  color: #424242;
  margin-left: 4px;
`;

export const MovieImage = styled.Image`
  height: 120px;
  width: 100px;
  background: #ccc;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
`;
