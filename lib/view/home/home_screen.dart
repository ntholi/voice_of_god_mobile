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
                  height: MediaQuery.of(context).size.width / 1.3,
                  decoration: BoxDecoration(
                    color: Colors.purple.shade50,
                    shape: BoxShape.circle,
                  ),
                ),
                Container(
                  margin: const EdgeInsets.only(right: 50),
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
            Column(
              children: [
                Padding(
                  padding: const EdgeInsets.all(25),
                  child: Column(children: [
                    Row(
                      mainAxisAlignment: MainAxisAlignment.spaceBetween,
                      children: const [
                        Text(
                          "Ntate Lebsiba",
                          style: TextStyle(
                            fontSize: 20,
                            fontWeight: FontWeight.w600,
                          ),
                        ),
                        Chip(
                            labelStyle: TextStyle(fontSize: 11),
                            label: Text("On Air")),
                      ],
                    ),
                    const SizedBox(height: 5),
                    Row(children: [
                      const Text(
                        "Up Next",
                        style: TextStyle(color: Colors.grey, fontSize: 13),
                      ),
                      Container(
                        width: 20,
                        alignment: AlignmentDirectional.center,
                        child: const Text(
                          "\u2981",
                          style: TextStyle(
                            color: Colors.deepPurple,
                          ),
                        ),
                      ),
                      const Text(
                        "Prophetic Hour",
                        style: TextStyle(color: Colors.grey, fontSize: 13),
                      ),
                    ]),
                  ]),
                ),
                Container(
                  height: 50,
                  decoration: const BoxDecoration(
                      color: Colors.deepPurple,
                      borderRadius: BorderRadius.only(
                        topLeft: Radius.circular(5),
                        topRight: Radius.circular(5),
                      )),
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
          ],
        ),
      ),
      bottomNavigationBar: const BottomNavigation(),
    );
  }
}
