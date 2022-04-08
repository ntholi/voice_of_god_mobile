import { StyleSheet, Text, View } from 'react-native';
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
      <NavBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: colors.dark,
  },
});
