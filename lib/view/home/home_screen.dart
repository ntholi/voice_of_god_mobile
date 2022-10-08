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
              children: [
                Container(
                  height: MediaQuery.of(context).size.width / 1.2,
                  decoration: BoxDecoration(
                    color: Colors.purple.shade50,
                    shape: BoxShape.circle,
                  ),
                ),
                Container(
                  margin: const EdgeInsets.only(right: 80),
                  decoration: BoxDecoration(
                    color: Colors.deepPurple,
                    border: Border.all(color: Colors.white, width: 10),
                    shape: BoxShape.circle,
                  ),
                  child: IconButton(
                    onPressed: () {},
                    icon: const Icon(
                      Icons.play_arrow,
                      color: Colors.white,
                    ),
                  ),
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
