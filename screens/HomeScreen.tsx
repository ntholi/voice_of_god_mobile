import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';

import { NavigationProp, ParamListBase } from '@react-navigation/native';
import NavBar from './nav/NavBar';
import colors from '../components/utils/colors';

type Props = {
  navigation: NavigationProp<ParamListBase>;
};

export default function HomeScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Text>Radio, Testing...</Text>
      <Image source={require('../assets/broadcast.png')} style={styles.image} />
      <NavBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  image: {
    width: '100%',
    height: '50%',
  },
});
