import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar, Platform } from 'react-native';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

import { Provider } from 'react-redux';
import store from './store';

import Routes from './routes';

const App = () => {
  GoogleSignin.configure({
    iosClientId: '1028371894652-onrhff0c19ao2de6hc28qlatb8ctnd59.apps.googleusercontent.com', // [iOS] if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
    webClientId: '1028371894652-sagd93becpdg4uviggcics6bj041734k.apps.googleusercontent.com'
  });

  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="#007EF2" />
      <Provider store={store}>
        <Routes />
      </Provider>
    </NavigationContainer>
  );
};

export default App;
