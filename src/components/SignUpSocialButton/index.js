import React from 'react';
import { Image } from 'react-native';

import { 
  Button,
  ImageContainer,
  Text,
} from './styles';

const SignUpSocialButton = ({ title, ...rest }) => {
  return(
    <Button {...rest}>
      <ImageContainer>
      <Image source={require('../../assets/google-icon.png')} />
      </ImageContainer>

      <Text>
        {title}
      </Text>
    </Button>
  );
}

export default SignUpSocialButton;