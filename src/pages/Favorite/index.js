import React from 'react';
import { View, FlatList } from 'react-native';
import { useSelector } from 'react-redux';

import {
  ContainerListItem,
  ContentListItem,
  MovieName,
  InfoText,
  MovieImage
} from './styles';

const Favorite = () => {
  const favorites = useSelector(state => state.favorites.favorites);

  const renderImg = item => {
    const hasntImg = item.Poster.search('N/A');
    if(hasntImg >= 0) {
      return(
        <MovieImage
          resizeMode="cover"
          source={require('../../assets/movie-reel.jpeg')}
        />
      );
    }
    return(
      <MovieImage
        resizeMode="cover"
        source={{ uri: item.Poster }}
      />
    );
  }

  return(
    <FlatList 
      data={favorites}
      renderItem={({item}) => (
        <ContainerListItem>
          {renderImg(item)}
          <ContentListItem>
            <View>
              <MovieName>
                {item.Title}
              </MovieName>
              <InfoText>
                {item.Year} 
              </InfoText>
            </View>
          </ContentListItem>
        </ContainerListItem>
      )}
    />
  );
}

export default Favorite;