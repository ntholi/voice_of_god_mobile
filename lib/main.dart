import 'package:flutter/material.dart';
import 'package:voice_of_god_mobile/view/home_screen.dart';
import 'package:voice_of_god_mobile/view/player.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: "Voice of God",
      home: HomeScreen(),
    );
  }
}
