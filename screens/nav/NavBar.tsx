import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import colors from '../../components/utils/colors';

const inactive = '#858585';
const active = '#000';

export default function Nav() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={[styles.button]}>
        <MaterialIcons name='radio' size={24} color={active} />
        <Text style={[styles.buttonText, { color: active }]}>Radio</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button]}>
        <MaterialIcons name='live-tv' size={24} color={inactive} />
        <Text style={[styles.buttonText, { color: inactive }]}>Broadcast</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button]}>
        <MaterialIcons name='school' size={24} color={inactive} />
        <Text style={[styles.buttonText, { color: inactive }]}>Training</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button]}>
        <MaterialIcons name='money' size={24} color={inactive} />
        <Text style={[styles.buttonText, { color: inactive }]}>Giving</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    borderTopWidth: 1,
    borderTopColor: colors.lightGrey,
  },
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  buttonText: {
    fontSize: 12,
    marginTop: 5,
  },
});
