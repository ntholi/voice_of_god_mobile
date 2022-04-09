import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialIcons } from '@expo/vector-icons';

export default function PlayerBar() {
  const [isPlaying, setIsPlaying] = React.useState(false);

  useEffect(() => {
    console.log('Is playing: ', isPlaying);
  }, [isPlaying]);

  return (
    <LinearGradient
      style={styles.container}
      colors={['#673AB7', '#7E57C2', '#9575CD', '#7E57C2']}
      start={{ x: 0, y: 0.5 }}
      end={{ x: 1, y: 0.5 }}
    >
      {isPlaying ? (
        <TouchableOpacity onPress={() => setIsPlaying(false)}>
          <MaterialIcons name='pause' size={28} color='white' />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={() => setIsPlaying(true)}>
          <MaterialIcons name='play-arrow' size={28} color='white' />
        </TouchableOpacity>
      )}

      <Text style={styles.text}>
        {isPlaying ? 'Radio Playing...' : 'Ready'}
      </Text>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderWidth: 1,
    borderColor: '#999',
  },
  text: {
    color: 'white',
    marginLeft: 15,
  },
});
