import 'package:flutter/material.dart';
import 'package:voice_of_god_mobile/view/player.dart';

import '../bottom_navigation.dart';
import 'home_header.dart';

class HomeScreen extends StatelessWidget {
  const HomeScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.white,
      body: SafeArea(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          children: [
            const HomeHeader(),
            Stack(
              alignment: AlignmentDirectional.bottomEnd,
              fit: StackFit.expand,
              children: [
                Container(
                  height: MediaQuery.of(context).size.width / 1.2,
                  decoration: BoxDecoration(
                    color: Colors.purple.shade50,
                    shape: BoxShape.circle,
                  ),
                ),
                IconButton(
                  onPressed: () {},
                  icon: const Icon(Icons.play_circle),
                )
              ],
            ),
            Container(
              height: 50,
              decoration: const BoxDecoration(
                color: Colors.deepPurple,
              ),
              child: Row(
                children: [
                  TextButton(
                    onPressed: () {},
                    child: const Player(),
                  ),
                ],
              ),
            ),
          ],
        ),
      ),
      bottomNavigationBar: const BottomNavigation(),
    );
  }
}
