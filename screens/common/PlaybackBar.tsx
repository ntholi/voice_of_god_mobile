import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialIcons } from '@expo/vector-icons';
import { Audio } from 'expo-av';

export default function PlayerBar() {
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [audio, setAudio] = React.useState<Audio.Sound>();

  async function startPlayback() {
    console.log('Loading Sound');
    setIsPlaying(true);
    const { sound } = await Audio.Sound.createAsync({
      uri: 'http://stream.zeno.fm/0tn0vg432mzuv',
    });
    setAudio(sound);

    console.log('Playing Sound');
    await sound.playAsync();
  }

  async function stopPlayback() {
    console.log('Stopping Sound');
    await audio?.stopAsync();
    setIsPlaying(false);
  }

  React.useEffect(() => {
    return audio
      ? () => {
          console.log('Unloading Sound');
          audio.unloadAsync();
        }
      : undefined;
  }, [audio]);

  return (
    <LinearGradient
      style={styles.container}
      colors={['#673AB7', '#7E57C2', '#9575CD', '#7E57C2']}
      start={{ x: 0, y: 0.5 }}
      end={{ x: 1, y: 0.5 }}
    >
      {isPlaying ? (
        <TouchableOpacity onPress={stopPlayback}>
          <MaterialIcons name='pause' size={28} color='white' />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={startPlayback}>
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
