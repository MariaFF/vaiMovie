import React from 'react';
import { useNavigation, useRoute } from '@react-navigation/core';
import Icon from 'react-native-vector-icons/Feather';

import Header from '../../../components/Header';
import {
  ImageBackground,
  Content,
  ChipName,
  ChipNameText,
  ContentInfo,
  ChipInfo,
  ChipInfoText,
} from './styles';

const Detail = () => {
  const {params} = useRoute();
  const navigation = useNavigation();

  const renderImg = item => {
    const hasntImg = item.Poster.search('N/A');
    if(hasntImg >= 0) {
      return require('../../../assets/movie-reel.jpeg');
    }
    return { uri: item.Poster };
  }

  return (
    <>
      <Header goBack={() => navigation.goBack()} title={'Movie Detail'}/>
      <ImageBackground
        resizeMode="cover"
        source={renderImg(params.item)}
      >
        <Content>
          <ChipName>
            <ChipNameText>{params.item.Title}</ChipNameText>
          </ChipName>
          <ContentInfo>
            <ChipInfo onPress={() => navigation.navigate('Detail', { item: params.item })}>
              <Icon name="info" size={22} color="#D50000" />
              <ChipInfoText>Info</ChipInfoText>
            </ChipInfo>

            <ChipInfo onPress={() => navigation.navigate('Comics', { item: params.item })}>
            <Icon name="bookmark" size={22} color="#D50000" />
            <ChipInfoText>Comics</ChipInfoText>
            </ChipInfo>
          </ContentInfo>
        </Content>

      </ImageBackground>
    </>
  );
}

export default Detail;
