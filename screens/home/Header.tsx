import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';

export default function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Radio</Text>
      <TouchableOpacity>
        <Ionicons name='settings-outline' size={24} color='#666' />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 25,
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#222',
  },
});
