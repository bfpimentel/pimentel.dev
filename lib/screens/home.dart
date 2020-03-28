import 'package:flutter/material.dart';
import '../widgets/profile_info.dart';
import '../widgets/profile_title.dart';
import '../widgets/social_group.dart';

class Home extends StatelessWidget {
  const Home();

  @override
  Widget build(final BuildContext context) {
    return Scaffold(
      body: Column(
        crossAxisAlignment: CrossAxisAlignment.center,
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
