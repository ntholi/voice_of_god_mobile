import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { Audio } from 'expo-av';

export default function PlayerBar() {
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [message, setMessage] = React.useState('Ready');
  const [audio, setAudio] = React.useState<Audio.Sound>();

  async function startPlayback() {
    setMessage('Loading...');
    setIsPlaying(true);
    const { sound } = await Audio.Sound.createAsync({
      uri: 'http://stream.zeno.fm/0tn0vg432mzuv',
    });
    setAudio(sound);

    setMessage('Now Playing');
    await sound.playAsync();
  }

  async function stopPlayback() {
    await audio?.stopAsync();
    setIsPlaying(false);
    setMessage('Stopped');
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
          <Ionicons name='pause' size={24} color='white' />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={startPlayback}>
          <Ionicons name='play' size={24} color='white' />
        </TouchableOpacity>
      )}

      <Text style={styles.text}>{message}</Text>
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
