import 'package:flutter/material.dart';

class BottomNavigation extends StatelessWidget {
  const BottomNavigation({super.key});

  @override
  Widget build(BuildContext context) {
    return BottomNavigationBar(items: const [
      BottomNavigationBarItem(
        icon: Icon(Icons.home),
        label: "Home",
      ),
      BottomNavigationBarItem(
        icon: Icon(Icons.school),
        label: "Training",
      ),
      BottomNavigationBarItem(
        icon: Icon(Icons.live_tv),
        label: "Broadcast",
      ),
    ]);
  }
}
