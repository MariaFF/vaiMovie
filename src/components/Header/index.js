import React from 'react';
import Icon from 'react-native-vector-icons/Feather';

import { Container, ContainerTitle, Title } from './styles';

const Header = ({title, goBack}) => {

  return (
    <Container>
      <Icon onPress={goBack} name="arrow-left" size={26} color="#fff" />
      <ContainerTitle>
        <Title >{title}</Title>
      </ContainerTitle>
    </Container>
  );
}

export default Header;
