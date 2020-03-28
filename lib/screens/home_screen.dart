import 'package:flutter/material.dart';
import 'package:portfolio/widgets/profile_title.dart';
import 'package:portfolio/widgets/profile_info.dart';
import 'package:portfolio/widgets/social_group.dart';

class HomeScreen extends StatelessWidget {
  const HomeScreen();

  @override
  Widget build(final BuildContext context) {
    return Container(
      padding: EdgeInsets.all(32),
      color: Color(0xFF191919),
      child: Column(
        mainAxisSize: MainAxisSize.max,
        mainAxisAlignment: MainAxisAlignment.spaceAround,
        children: <Widget>[
          const ProfileTitle(),
          const ProfileInfo(),
          const SocialGroup(),
        ],
      ),
    );
  }
}
