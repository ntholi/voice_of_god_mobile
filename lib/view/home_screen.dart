import 'package:flutter/material.dart';
import 'package:voice_of_god_mobile/view/player.dart';

class HomeScreen extends StatelessWidget {
  const HomeScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SafeArea(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          children: [
            const Text("Radio"),
            Container(
              height: 50,
              decoration: const BoxDecoration(
                color: Colors.deepPurple,
              ),
              child: Row(
                children: [
                  ElevatedButton(
                    onPressed: () {},
                    child: const Player(),
                  ),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }
}
