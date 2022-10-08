import 'package:flutter/material.dart';
import 'package:just_audio/just_audio.dart';

class Player extends StatefulWidget {
  const Player({super.key});

  @override
  State<Player> createState() => _PlayerState();
}

class _PlayerState extends State<Player> {
  late AudioPlayer _audioPlayer;

  @override
  void initState() {
    super.initState();
    _audioPlayer = AudioPlayer();

    _audioPlayer
        .setAudioSource(
      ConcatenatingAudioSource(
        children: [
          AudioSource.uri(Uri.parse("http://stream.zeno.fm/0tn0vg432mzuv")),
        ],
      ),
    )
        .catchError((error) {
      print("An error occured $error");
    });
  }

  @override
  void dispose() {
    _audioPlayer.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return StreamBuilder<PlayerState>(
      stream: _audioPlayer.playerStateStream,
      builder: (context, snapshot) {
        final playerState = snapshot.data;
        return _playerButton(playerState);
      },
    );
  }

  Widget _playerButton(PlayerState? playerState) {
    final state = playerState?.processingState;

    if (state == ProcessingState.loading ||
        state == ProcessingState.buffering) {
      return const SizedBox(
        height: 25,
        width: 25,
        child: CircularProgressIndicator(
          strokeWidth: 2,
          color: Colors.white,
        ),
      );
    } else if (_audioPlayer.playing != true) {
      return IconButton(
        icon: const Icon(Icons.play_arrow, color: Colors.white),
        onPressed: _audioPlayer.play,
      );
    } else if (state != ProcessingState.completed) {
      return IconButton(
        icon: const Icon(Icons.pause, color: Colors.white),
        onPressed: _audioPlayer.pause,
      );
    } else {
      return IconButton(
          icon: const Icon(Icons.replay, color: Colors.white),
          iconSize: 64.0,
          onPressed: () {
            _audioPlayer.seek(Duration.zero,
                index: _audioPlayer.effectiveIndices?.first);
          });
    }
  }
}
