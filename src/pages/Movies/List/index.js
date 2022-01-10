import React, { useState, useEffect, useMemo } from 'react';
import { View, Text, ActivityIndicator, Alert, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/Feather';
import FavoriteIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import { fetchMoviesApi } from '../../../services/api';

import { 
  Container,
  ContainerListItem,
  MovieImage,
  ContentListItem,
  MovieName,
  Favorite,
  FavoriteText,
  InfoText,
  SearchContainer,
  InputContainer,
  TextInput
} from './styles';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchText, setSearchText] = useState('2022');
  const dispatch = useDispatch();
  const navigation = useNavigation();

  useEffect(() => {
    fetchMovies()
  }, [])

  async function fetchMovies() {
    setLoading(true);
    try {    
      const response = await fetchMoviesApi({s: searchText, r: 'json'});
      const arr = response.Search.map(movie => {
        return {...movie, favorite: false}
      }
      );
      setMovies([...arr])
      setMovies(response.Search);
      setLoading(false);
      
    } catch (error) {
      return (Alert.alert(
        'Erro',
        'Tente novamente mais tarde'
      ))
    }
  }

  const handleFavorite = (item) => {
    dispatch(MovieActions.favoriteMovieAction(item));
    const arr = [...movies];
    const index = arr.findIndex(({ imdbID }) => imdbID === item.imdbID);

    if(index >= 0){
      arr[index].favorite = !item.favorite;
    }
    setMovies([...arr])
  }

  const renderImg = item => {
    const hasntImg = item.Poster.search('N/A');
    if(hasntImg >= 0) {
      return(
        <MovieImage
          resizeMode="cover"
          source={require('../../../assets/movie-reel.jpeg')}
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

  return (
    <Container>
      {loading && movies.length === 0 ? 
      (
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <ActivityIndicator size="large" color="#d50000"/>
        </View>
      ) :
      (
        <>
          <SearchContainer>
            <InputContainer>
              <TextInput
                placeholder="Pesquisar"
                value={searchText}
                onChangeText={(text) => setSearchText(text)}
              />
              <Icon
                onPress={fetchMovies}
                name="search"
                size={24}
                color="#d50000"
              />
            </InputContainer>
          </SearchContainer>
          <FlatList 
            data={movies}
            renderItem={({item}) => (
              <ContainerListItem
                key={item.imdbID}
                onPress={() => navigation.navigate('Detail', { item })}
              > 
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
                <Favorite>
                  <FavoriteIcon 
                    onPress={() => handleFavorite(item)}
                    name={item.favorite ? "star" : "star-outline"}
                    size={22}
                    color="#c53030"
                  />
                </Favorite>
              </ContentListItem>
            </ContainerListItem>
            )}
          />
        </>
      )}
    </Container>
  );
}


export default Movies;