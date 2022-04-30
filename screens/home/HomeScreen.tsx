import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import React from 'react';

import { NavigationProp, ParamListBase } from '@react-navigation/native';
import NavBar from '../nav/NavBar';
import PlayerBar from '../common/PlaybackBar';
import Header from './Header';

type Props = {
  navigation: NavigationProp<ParamListBase>;
};

export default function HomeScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/images/wave.png')}
        resizeMode='cover'
        style={styles.headerImage}
      >
        <Text style={styles.text}>Voice of God</Text>
        <View style={styles.info}>
          <Text>Still working on it...</Text>
        </View>
      </ImageBackground>
      <View>
        <PlayerBar />
        <NavBar />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  headerImage: {
    height: '60%',
    flex: 1,
    alignItems: 'center',
  },
  info: {
    top: '20%',
    width: '85%',
    height: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 500,
  },
  text: {
    color: 'white',
  },
});
