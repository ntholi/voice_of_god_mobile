import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { ReactElement, useEffect, useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialIcons } from '@expo/vector-icons';
import { Audio } from 'expo-av';

enum State {
  Ready = 'Ready',
  Loading = 'Loading...',
  Playing = 'Playing',
  Stopped = 'Stopped',
  Error = 'Error, try again later',
}

export default function PlayerBar() {
  const [audio, setAudio] = useState<Audio.Sound>();
  const [state, setState] = useState(State.Loading);
  const [display, setDisplay] = useState<ReactElement>();

  useEffect(() => {
    Audio.setAudioModeAsync({
      staysActiveInBackground: true,
      playsInSilentModeIOS: true,
      interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
      interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX,
    }).then(() => setState(State.Ready));
  }, []);

  useEffect(() => {
    if (state == State.Playing) {
      setDisplay(
        <View>
          <Text style={[styles.text, styles.title]}>Wind of Change</Text>
          <Text style={[styles.text, styles.details]}>Radio</Text>
        </View>
      );
    } else setDisplay(<Text style={styles.text}>{state}</Text>);
  }, [state]);

  async function startPlayback() {
    setState(State.Loading);
    try {
      const { sound } = await Audio.Sound.createAsync({
        uri: 'http://stream.zeno.fm/0tn0vg432mzuv',
      });
      setAudio(sound);

      setState(State.Playing);
      await sound.playAsync();
    } catch (error: any) {
      setState(State.Error);
      alert('Error: ' + error.message);
    }
  }

  async function stopPlayback() {
    try {
      await audio?.stopAsync();
    } catch (e) {}
    setState(State.Stopped);
  }

  useEffect(() => {
    return audio
      ? () => {
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
      {isPlaying(state) ? (
        <TouchableOpacity onPress={stopPlayback}>
          <MaterialIcons name='pause' size={32} color='white' />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={startPlayback}>
          <MaterialIcons name='play-arrow' size={32} color='white' />
        </TouchableOpacity>
      )}

      <View>{display}</View>
    </LinearGradient>
  );
}

function isPlaying(state: State) {
  return state == State.Playing;
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    height: 70,
  },
  text: {
    color: 'white',
    marginLeft: 15,
  },
  title: {
    fontWeight: 'bold',
  },
  details: {
    fontWeight: '100',
    fontSize: 14,
  },
});
