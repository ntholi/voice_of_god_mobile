import 'package:flutter/material.dart';

class HomeHeader extends StatelessWidget {
  const HomeHeader({super.key});

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.symmetric(vertical: 16),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: [
          Row(
            children: const [
              Text(
                "Voice",
                style: TextStyle(
                  fontSize: 25,
                  fontWeight: FontWeight.bold,
                ),
              ),
              Text(
                " of God",
                style: TextStyle(fontSize: 25),
              ),
            ],
          ),
          IconButton(
              onPressed: () {},
              icon: const Icon(
                Icons.settings,
                color: Colors.grey,
              ))
        ],
      ),
    );
  }
}
